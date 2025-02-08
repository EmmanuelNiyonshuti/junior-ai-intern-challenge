"""
This module sets up the Flask application, configures CORS for cross-origin 
requests, and registers the app's blueprint for route handling.
"""
from flask import Flask, jsonify
from flask_cors import CORS
from app.routes import app_views

cors = CORS()
def create_app():
    """
    Create and configure the Flask application.
    
    This function initializes the Flask app, applies CORS to allow cross-origin 
    requests from all origins (for development), and registers the app's routes 
    through the 'app_views' blueprint.
    
    Returns:
        app (Flask): The configured Flask application object.
    """
    app = Flask(__name__)
    cors.init_app(app, resources={r"/*": {"origins": "chatbot-web-five.vercel.app"}})
    app.register_blueprint(app_views)

    return app
