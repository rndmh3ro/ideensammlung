#!/usr/bin/python
#  -*- coding: utf-8 -*-

from flask import Flask
from werkzeug.contrib.fixers import ProxyFix

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app)

from ideensammlung import views, config
