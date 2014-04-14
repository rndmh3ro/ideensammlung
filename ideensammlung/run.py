from ideensammlung import app, database
from os import path

if not path.isfile(app.config["DATABASE"]):
    database.init_db()

app.run(debug=True)