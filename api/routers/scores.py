from fastapi import APIRouter
from pydantic import BaseModel

from api.models import Round
from api.dependencies import db_dependency_type


router = APIRouter(
    prefix='/api/scores'
)


class ScoreModel(BaseModel):
    player_name: str
    score: int


@router.post('/submit-score')
async def submit_score(data_to_submit: ScoreModel, db: db_dependency_type):
    new_round = Round(**data_to_submit.dict())
    db.add(new_round)
    db.commit()
    return {
        "data": {
            "name": data_to_submit.player_name,
            "score": data_to_submit.score,
            "message": "Your score was saved!",
        }
    }


@router.get('/leaderboard')
async def leaderboard(db: db_dependency_type):
    top_scores = db.query(Round).order_by(Round.score.desc()).limit(3).all()

    leaderboard_data = [{"id": score.id, "name": score.player_name, "score": score.score} for score in top_scores]

    return {
        "data": leaderboard_data,
    }
