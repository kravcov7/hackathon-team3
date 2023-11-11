import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

SECRET_KEY = os.getenv('SECRET_KEY')
ALGORITHM = ['HS256']

SQLALCHEMY_DATABASE_URL = 'sqlite:///./hack_game3_db'
