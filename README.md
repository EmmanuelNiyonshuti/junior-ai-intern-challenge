# AI Chatbot

This project is an AI chatbot that interacts with users using [Google Gemini API](https://ai.google.dev/gemini-api/docs).  
It consists of:
- **Backend**: A Flask API that processes user input and returns responses from Gemini AI.
- **Frontend**: A React (Vite) web app that interacts with the backend API.

## Features
- AI-powered chatbot responses using Google Gemini API
- REST API backend using Flask
- Frontend built with React & Vite with tailwindcss
- Deployed backend on Render
- Deployed frontend on Vercel

## Project Structure
├── backend/        # Backend API using Flask
├── frontend/       # Frontend web app using React & Vite
├── README.md       # Project overview


## Setup Guide

### **1. Backend Setup**
```sh
# Navigate to the backend directory
cd backend

# (Optional) Create and activate a virtual environment to avoid dependency conflicts
python -m venv .venv

source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the Flask server
python3 run.py

The API will be available at http://localhost:5000.

```
### **2. Frontend Setup**
```sh
cd frontend
# Install dependencies
npm install

#Start the development server
npm run dev

The frontend will be available at http://localhost:3000 #default Vite port is 5173, but this project is configured to use 3000 in vite.config.js
```

## Deployment Links
- Backend (Render): [API URL](https://ai-chatbot-backend-evct.onrender.com)

- Frontend (Vercel): [Web App URL](https://chatbot-web-five.vercel.app/)

### Author
- Names: NIYONSHUTI Emmanuel
- [Twitter(X)](https://x.com/NIYONSH77028058)
- [LinkedIn](https://www.linkedin.com/in/niyonshuti-emmanuel-82877b285/)