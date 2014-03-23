from sqlalchemy import Column, Integer, String, ForeignKey
from ideensammlung.database import Base


class Ideas(Base):
    __tablename__ = "ideas"
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    title = Column(String(50), nullable=False)
    description = Column(String(5000), nullable=False)

    def __init__(self, title=None, description=None):
        self.title = title
        self.description = description


class Images(Base):
    __tablename__ = "images"
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    image_id = Column(Integer, ForeignKey(Ideas.id))
    image = Column(String(50))


