from flask_wtf import Form
from wtforms import TextField, TextAreaField, FileField
from wtforms.validators import DataRequired


class AddIdea(Form):
    title = TextField("Title", validators=[DataRequired()])
    description = TextAreaField("description", validators=[DataRequired()])


class AddImage(Form):
    image = FileField("image")
