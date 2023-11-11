from os import getenv
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = getenv('SECRET_KEY')
DB_NAME = getenv('DB_NAME')
DB_USER = getenv('DB_USER')
DB_PASSWORD = getenv('DB_PASSWORD')
DB_ROOT_USER = getenv('DB_ROOT_USER')
DB_ROOT_PASSWORD = getenv('DB_ROOT_PASSWORD')
ALGORITHM = ['HS256']

SQLALCHEMY_DATABASE_URL = f'mysql+pymysql://hack_user:hackuserpassword@localhost/hack_game3_db'
