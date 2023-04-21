import os


class Config(object):
    SECRET_KEY = os.environ.get("SECRET_KEY") or "your-secret-key"
    SQLALCHEMY_DATABASE_URI = (
        os.environ.get("DATABASE_URL")
        or "postgresql://user:password@localhost/aircon_db"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY") or "your-jwt-secret-key"
