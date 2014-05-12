from sqlalchemy import Column, Integer, String, ForeignKey, DATE
from ideensammlung.database import Base


class Ideas(Base):
    __tablename__ = "ideas"
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    title = Column(String(50), nullable=False)
    description = Column(String(5000), nullable=False)


class Images(Base):
    __tablename__ = "images"
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    image_id = Column(Integer, ForeignKey(Ideas.id))
    image = Column(String(50))


class Comments(Base):
    __tablename__ = "comments"
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    image_id = Column(Integer, ForeignKey(Ideas.id))
    comment = Column(String(5000), nullable=False)
