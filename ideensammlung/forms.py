from flask_wtf import Form
from wtforms import TextField, TextAreaField, FileField
from wtforms.validators import DataRequired, Length
from ideensammlung import database


class AddIdea(Form):
    title = TextField("Title", [DataRequired(message="Titel darf nicht leer sein."),
                                Length(min=1, max=50, message="Titel darf maximal 50 Zeichen betragen.")])
    description = TextAreaField("description", [DataRequired(message="Beschreibung darf nicht leer sein"),
                                                Length(min=1, max=5000,
                                                       message="Beschreibung darf maximal 5000 Zeichen lang sein.")])


class AddImage(Form):
    image = FileField("image")