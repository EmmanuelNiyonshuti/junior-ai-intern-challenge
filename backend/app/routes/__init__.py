"""
This module defines the 'app_views' blueprint and registers the routes 
for the application, specifically under the "/api" URL prefix.
"""
from flask import Blueprint

app_views = Blueprint("app_views", __name__, url_prefix="/api")

from app.routes.chatbot import *
