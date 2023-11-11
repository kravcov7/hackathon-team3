from jose import jwt
from starlette import status
from typing import Annotated
from datetime import timedelta, datetime
from pydantic import BaseModel
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm

from api.models import User
from api.dependencies import db_dependency_type, bcrypt_context, SECRET_KEY, ALGORITHM


router = APIRouter(
    prefix='/api/auth',
    tags=['auth']
)


class SignupModel(BaseModel):
    username: str
    email: str
    password: str


class LoginModel(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


def authenticate_user(username: str, password: str, db):
    user = db.query(User).filter(User.username == username).one_or_none()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user


def create_access_token(username: str, user_id: int, role:str, expires_delta: timedelta):
    encode = {'sub': username, 'id': user_id, 'role': role}
    expires = datetime.utcnow() + expires_delta
    encode.update({'exp': expires})
    return jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM[0])


@router.post('/signup')
async def create_user(db: db_dependency_type, signup_data: SignupModel):
    hashed_password = bcrypt_context.hash(signup_data.password)
    user_to_create = User(**signup_data.dict(exclude={'password'}), hashed_password=hashed_password)

    db.add(user_to_create)
    db.commit()

    return {
                "data":
                {
                    "username": user_to_create.username,
                     "email": user_to_create.username,
                     "message": "Registration succeeded"
                }
            }


@router.post('/token', response_model=Token)
async def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: db_dependency_type):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Not valid user')

    token = create_access_token(user.username, user.id, timedelta(minutes=20))
    return {'access_token': token, 'token_type': 'bearer'}
