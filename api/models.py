from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String, ForeignKey

from api.database import Base


class Round(Base):
    __tablename__ = 'rounds'

    id = Column(Integer, primary_key=True, index=True)
    player_name = Column(String)
    score = Column(Integer)


class User(Base):
    __tablename__ ='users'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True)
    username = Column(String(255), unique=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    hashed_password = Column(String(255))

    scores = relationship('Score', back_populates='owner')


class Score(Base):
    __tablename__ = 'scores'

    id = Column(Integer, primary_key=True, index=True)
    score = Column(Integer)
    owner_id = Column(Integer, ForeignKey('users.id'))

    owner = relationship('User', back_populates='scores')
