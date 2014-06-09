from ideensammlung import app, database
from flask_debugtoolbar import DebugToolbarExtension
#Init database and tables, if not already there
database.init_db()

toolbar = DebugToolbarExtension(app)
app.run(debug=True)