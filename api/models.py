from sqlalchemy import Column, Integer, String

from api.database import Base


class Round(Base):
    __tablename__ = 'rounds'

    id = Column(Integer, primary_key=True, index=True)
    player_name = Column(String)
    score = Column(Integer)
