from ideensammlung import app
import os

app.config.from_object(__name__)

app.config.update(dict(
    DATABASE=os.path.join(app.root_path, "ideas.db"),
    DEBUG=True,
    SECRET_KEY="development key",
    USERNAME="admin",
    PASSWORD="default",
    ALLOWED_EXTENSIONS=['png', 'jpg', 'jpeg', 'gif', 'tif', 'tiff'],
    UPLOAD_FOLDER=os.path.join(app.root_path, "uploads"),
    MAX_CONTENT_LENGTH=1 * 1024 * 1024
))
app.config.from_envvar('IDEAS_SETTINGS', silent=True)