#!/usr/bin/python
#  -*- coding: utf-8 -*-

from ideensammlung import app, config
from ideensammlung import database
from ideensammlung import forms
from ideensammlung import models
from werkzeug.utils import secure_filename
import os

from flask import request, session, redirect, url_for, abort, render_template, flash
from werkzeug.utils import secure_filename

@app.route("/", methods=["GET", "POST"])
def index():
    form = forms.AddIdea()
    ideas = models.Ideas.query.all()
    return render_template("index.html", SITENAME="Ideenfundgrube", ideas=ideas, form=form)


@app.route("/idea/<idea_id>/", methods=["POST", "GET"])
def get_idea(idea_id):
    """Show specific idea and images."""
    image_form = forms.AddImage()
    form = forms.AddIdea()
    images = models.Images.query.filter_by(image_id=idea_id).all()
    ideas = models.Ideas.query.filter_by(id=idea_id).first()
    if ideas is None:
        abort(404)
    return render_template("idea.html", SITENAME="Ideenfundgrube", ideas=ideas, idea_id=idea_id,
                           images=images, image_form=image_form, form=form)


@app.route("/add_idea", methods=["POST"])
def add_idea():
    #TODO: Change flash() to flask-templare
    """Add idea."""
    form = forms.AddIdea()
    if not session.get("logged_in"):
        abort(401)
    if form.validate_on_submit():
        title = form.title.data
        description = form.description.data
        idea = models.Ideas(title=title, description=description)
        database.db_session.add(idea)
        database.db_session.commit()
        flash("Idee eingetragen!")
    else:
        flash(form.errors.items())
    return redirect(url_for("index"))

@app.route("/delete_idea/<idea_id>", methods=["GET", "POST"])
def delete_idea(idea_id):
    """Delete idea and all images."""
    if not session.get("logged_in"):
        abort(401)
    #TODO: Add confirmation dialog for deleting idea.
    ideas = models.Ideas.query.filter_by(id=idea_id).one()
    images = models.Images.query.filter_by(image_id=idea_id).all()
    models.Ideas.query.filter_by(id=idea_id).delete()
    for image in images:
        try:
            os.remove(os.path.join(app.config['UPLOAD_FOLDER'], image.image))
        except OSError:
            pass
    database.db_session.delete(ideas)
    database.db_session.commit()
    flash(u"Idee gelöscht!")
    return redirect(url_for("index"))


@app.route("/upload_image", methods=["POST"])
def upload_image():
    """ Upload image."""
    if not session.get("logged_in"):
        abort(401)
    #TODO: Check for filesize
    #TODO: Add errors if file not in right format or to big.
    image_form = forms.AddImage()
    image = image_form.image.data
    idea_id = request.form["idea_id"]
    if image and database.allowed_file(image.filename):
        filename = secure_filename(image.filename)
        db_image = models.Images(image_id=idea_id, image=filename)
        database.db_session.add(db_image)
        database.db_session.commit()
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        flash("Bild hochgeladen!")
    else:
        flash("Da ist was verkehrt mit dem Bild.")
    return redirect(url_for("get_idea", idea_id=idea_id))


@app.route("/delete_image/<image_id>", methods=["GET", "POST"])
def delete_image(image_id):
    """Deletes image of idea."""
    if not session.get("logged_in"):
        abort(401)
    #TODO: make jumping back to idea possible
    #TODO: add confirmation dialog to delete image.
    image_id = models.Images.query.filter_by(id=image_id).one()
    image = os.path.join(app.config['UPLOAD_FOLDER'], image_id.image)
    database.db_session.delete(image_id)
    try:
        os.remove(image)
    except OSError:
        pass
    database.db_session.commit()
    flash(u"Bild gelöscht!")
#    return redirect(url_for("get_idea", idea_id=idea_id))
    return redirect(url_for("index"))


@app.route("/login", methods=["GET", "POST"])
def login():
    """login function."""
    #TODO: Add secure auth.
    error = None
    if request.method == "POST":
        if request.form["username"] != app.config["USERNAME"] or request.form["password"] != app.config["PASSWORD"]:
            error = "Nutzername oder Passwort falsch!"
        else:
            session["logged_in"] = True
            flash("Erfolgreich eingeloggt.")
            return redirect(url_for("index"))
    return render_template("login.html", error=error)

@app.route("/logout")
def logout():
    """Logout function"""
    session.pop("logged_in", None)
    flash("Erfolgreich ausgeloggt.")
    return redirect(url_for("index"))