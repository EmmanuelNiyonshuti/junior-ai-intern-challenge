"""
This module sets up the Flask application, configures CORS for cross-origin 
requests, and registers the app's blueprint for route handling.
"""
from flask import Flask
from flask_cors import CORS
from app.routes import app_views

cors = CORS()

def create_app():
    """
    Create and configure the Flask application.
    
    This function initializes the Flask app, applies CORS to allow cross-origin 
    requests from the specified origin, and registers the app's routes 
    through the 'app_views' blueprint.
    
    Returns:
        app (Flask): The configured Flask application object.
    """
    app = Flask(__name__)

    cors.init_app(
        app,
        resources={
            r"/*": {
                "origins": "*"
            }
        },
    )

    app.register_blueprint(app_views)

    return app