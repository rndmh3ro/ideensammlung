#!/usr/bin/python
#  -*- coding: utf-8 -*-
import os
import unittest

from ideensammlung import app
from ideensammlung import database

from tempfile import mkstemp


class IdeaTesting(unittest.TestCase):
    def setUp(self):
        try:
            os.remove(app.config['DATABASE'])
        except OSError:
            pass
        app.config["TESTING"] = True
        app.config['WTF_CSRF_ENABLED'] = False
        self.app = app.test_client()
        self.db_fd, app.config['DATABASE'] = mkstemp()
        database.init_db()

    def tearDown(self):
        database.drop_db()

    def Login(self, username, password):
        return self.app.post("/login", data=dict(
            username=username,
            password=password
        ), follow_redirects=True
        )

    def add_idea(self, title, description):
        return self.app.post("/add_idea", data=dict(
            title=title,
            description=description
        ), follow_redirects=True)

    def delete_idea(self, idea_id):
        return self.app.post("/delete_idea/"+str(idea_id), data=dict(
            idea_id=idea_id
        ), follow_redirects=True)

    def logout(self):
        return self.app.get("/logout", follow_redirects=True)

# The following are tests

    def test_emptydb(self):
        rv = self.app.get("/")
        assert "Nichts da." in rv.data

    def test_login_logout(self):
        rv = self.Login("admin", "default")
        assert "Erfolgreich eingeloggt." in rv.data
        rv = self.logout()
        assert "Erfolgreich ausgeloggt."

    def test_wrong_login(self):
        rv = self.Login("adminx", "default")
        assert "Nutzername oder Passwort falsch!"
        rv = self.Login("admin", "defaultx")
        assert "Nutzername oder Passwort falsch!"

    def test_idea_adding_and_deleting_when_logged_in(self):
        self.Login("admin", "default")
        rv1 = self.add_idea("testtitel", "testdescription")
        assert "Nichts da." not in rv1.data
        assert "testtitel" in rv1.data
        self.delete_idea(1)
        rv2 = self.app.get("/")
        assert "Nichts da." in rv2.data

    def test_idea_adding_when_logged_out(self):
        rv1 = self.add_idea("testtitel", "testdescription")
        assert "Unauthorized" in rv1.data
        assert "testtitel" not in rv1.data
        rv2 = self.app.get("/")
        assert "Nichts da." in rv2.data

    def test_idea_deleting_when_logged_out(self):
        self.Login("admin", "default")
        self.add_idea("testtitel", "testdescription")
        self.logout()
        rv1 = self.delete_idea(1)
        assert "Unauthorized" in rv1.data

    #TODO: write tests for uploading and deleting images
    #TODO: write test that checks if ideas really get deleted from DB

if __name__ == "__main__":
    unittest.main
