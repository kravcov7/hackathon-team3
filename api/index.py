from fastapi import FastAPI

from api.models import Base
from api.database import engine
from api.routers import auth

app = FastAPI()

Base.metadata.create_all(engine)

app.include_router(auth.router)
