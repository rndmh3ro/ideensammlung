#!/usr/bin/python
#  -*- coding: utf-8 -*-

from ideensammlung import app
from ideensammlung import forms
from ideensammlung import db_connect
import os

from flask import request, session, redirect, url_for, abort, render_template, flash
from werkzeug.utils import secure_filename

@app.route("/", methods=["GET", "POST"])
def index():
    form = forms.AddIdea()
    db = db_connect.get_db()
    all_ideas = db.execute("select id, title from ideas order by id asc")
    ideas = all_ideas.fetchall()
    return render_template("index.html", SITENAME="Ideenfundgrube", ideas=ideas, form=form)


@app.route("/idea/<idea_id>/", methods=["POST", "GET"])
def get_idea(idea_id):
    """Show specific idea and images."""
    db = db_connect.get_db()
    image_form = forms.AddImage()
    form = forms.AddIdea()
    cur = db.execute("select id, title, description from ideas where id=?", (idea_id,))
    all_images = db.execute("select id, image from images where image_id=?", (idea_id, ))
    ideas = cur.fetchone()
    images = all_images.fetchall()
    if ideas is None:
        abort(404)
    return render_template("idea.html", SITENAME="Ideenfundgrube", ideas=ideas, idea_id=idea_id,
                           images=images, image_form=image_form, form=form)


@app.route("/add_idea", methods=["POST"])
def add_idea():
    """Add idea."""
    #TODO: Add min. and max length for title and description.
    form = forms.AddIdea()
    if not session.get("logged_in"):
        abort(401)
    if form.validate_on_submit():
        db = db_connect.get_db()
        title = form.title.data
        description = form.description.data
        db.execute("insert into ideas (title,description) values (?,?)", (title, description))
        db.commit()
        flash("Idee eingetragen!")
    return redirect(url_for("index"))


@app.route("/delete_idea/<idea_id>", methods=["GET"])
def delete_idea(idea_id):
    """Delete idea and all images."""
    #TODO: Add confirmation dialog for deleting idea.
    db = db_connect.get_db()
    images = db.execute("select image from images where image_id=?", (idea_id,))
    all_images = images.fetchall()
    for fn in all_images:
        try:
            os.remove(os.path.join(app.config['UPLOAD_FOLDER'], fn[0]))
        except OSError:
            pass
    db.execute("delete from images where image_id=?", (idea_id,))
    db.execute("delete from ideas where id=?", (idea_id,))
    db.commit()
    flash(u"Idee gelöscht!")
    return redirect(url_for("index"))


@app.route("/upload_image", methods=["POST"])
def upload_image():
    """ Upload image."""
    #TODO: Check for filesize
    #TODO: Add errors if file not in right format or to big.
    image_form = forms.AddImage()
    image = image_form.image.data
    idea_id = request.form["idea_id"]
    if image and db_connect.allowed_file(image.filename):
        db = db_connect.get_db()
        filename = secure_filename(image.filename)
        db.execute("insert into images (image_id, image) values ((select id from ideas where id=?),?)",
                   (idea_id, filename))
        db.commit()
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        flash("Bild hochgeladen!")
    return redirect(url_for("get_idea", idea_id=idea_id))


@app.route("/delete_image/<image_id>", methods=["GET", "POST"])
def delete_image(image_id):
    """Deletes image of idea."""
    #TODO: make jumping back to idea possible
    #TODO: add confirmation dialog to delete image.

#    idea_id = [request.form["idea_id"]]
#    print idea_id
    db = db_connect.get_db()
    image = os.path.join(app.config['UPLOAD_FOLDER'], db.execute("select image from images where id=?",
                                                                 (image_id,)).fetchone()[0])
    db.execute("delete from images where id = ?", (image_id,))
    try:
        os.remove(image)
    except OSError:
        pass
    db.commit()
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