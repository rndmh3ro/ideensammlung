#!/usr/bin/python
#  -*- coding: utf-8 -*-
import os
import unittest
import tempfile

from ideensammlung import app
from ideensammlung import database


class IdeaTesting(unittest.TestCase):
    def setUp(self):
        self.db_fd, app.config["DATABASE"] = tempfile.mkstemp()
        app.config["TESTING"] = True
        self.app = app.test_client()
        database.init_db()

    def TearDown(self):
        os.close(self.db_fd)
        os.unlink(app.config["DATABASE"])

    def Login(self, username, password):
        return self.app.post("/login", data=dict(
            username=username,
            password=password
        ), follow_redirects=True
        )

    def add_idea(self, idea_id, title, description):
        return self.app.post("/add_idea", data=dict(
            idea_id=id,
            title=title,
            description=description
        ), follow_redirects=True)

    def delete_idea(self, idea_id):
        return self.app.post("/delete_idea", data=dict(
            id=id
        ), follow_redirects=True)

    def logout(self):
        return self.app.get("/logout", follow_redirects=True)

    def test_emptydb(self):
        rv = self.app.get("/")
        assert "Nichts da." in rv.data

    def test_login_logout(self):
        rv = self.Login("admin", "default")
        assert "Erfolgreich eingeloggt." in rv.data
        rv = self.logout()
        assert "Erfolgreich ausgeloggt."
        rv = self.Login("adminx", "default")
        assert "Nutzername oder Passwort falsch!"
        rv = self.Login("admin", "defaultx")
        assert "Nutzername oder Passwort falsch!"

    def test_idea_adding(self):
        self.Login("admin", "default")
        rv = self.add_idea("1", "testtitel", "testdescription")
        assert "Nichts da." not in rv.data
        assert "testtitel" in rv.data

    def test_idea_delete(self):
        self.Login("admin", "default")
        self.add_idea("1", "testtitel", "testdescription")
        rv = self.delete_idea("1")
        print rv.data
        assert "Nichts da." in rv.data

if __name__ == "__main__":
    unittest.main
