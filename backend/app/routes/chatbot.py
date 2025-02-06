"""
This module handles the '/chat' endpoint for processing user prompts 
using the Google Gemini AI model. It accepts POST requests, sends the 
prompt to Gemini, and returns the model's generated response.
"""
from flask import request
import google.generativeai as genai
import os
from dotenv import load_dotenv
from flask import jsonify
from app.routes import app_views

load_dotenv()

@app_views.route("/chat", methods=["POST"])
def chat():
    """
    Handles the '/chat' endpoint by receiving a prompt from the request, 
    generating a response using Google Gemini AI, and returning the result.
    
    Returns:
        jsonify: A JSON response with the generated text or error message.
    """
    api_key = os.getenv("GEMINI_API_KEY")
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel("gemini-1.5-flash")
    data = request.json
    prompt = data.get("prompt")
    if prompt is None:
        return jsonify({
            "msg": "missing prompt"
        }), 400
    res = model.generate_content(prompt)
    return jsonify({
        'msg': res.text
    }), 201
