from ideensammlung import app, database

#Init database and tables, if not already there
database.init_db()

app.run(debug=True)