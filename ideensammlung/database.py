from ideensammlung import app
from os import remove

from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

database = app.config["DATABASE"]
engine = create_engine('sqlite:////'+database, convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))

Base = declarative_base()
Base.query = db_session.query_property()


def init_db():
    Base.metadata.create_all(bind=engine, checkfirst=True)


def drop_db():
    Base.metadata.drop_all(bind=engine)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in app.config["ALLOWED_EXTENSIONS"]
