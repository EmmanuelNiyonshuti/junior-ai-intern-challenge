# AI Chatbot

This project is an AI chatbot that interacts with users using [Google Gemini API](https://ai.google.dev/gemini-api).  
It consists of:
- **Backend**: A Flask API that processes user input and returns responses from Gemini AI.
- **Frontend**: A React (Vite) web app that interacts with the backend API.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Guide](#setup-guide)
  - [Backend Setup](##1-backend-setup)
  - [Frontend Setup](##2-frontend-setup)
- [Deployment Links](#deployment-links)
- [Author](#author)

# Features
- AI-powered chatbot responses using Google Gemini API
- REST API backend using Flask
- Frontend built with React & Vite with tailwindcss
- Deployed backend on Render
- Deployed frontend on Vercel

# Project Structure
```
├── backend/        # Backend API using Flask

├── frontend/       # Frontend web app using React & Vite

├── README.md       # Project overview
```

## Setup Guide

## **1. Backend Setup**
```sh
# clone the repository
git clone git@github.com:EmmanuelNiyonshuti/junior-ai-intern-challenge.git

# Navigate to the backend directory
cd backend

# (Optional) Create virtual environment to avoid dependency conflicts
python3 -m venv .venv

# Activate Virtual environment
source .venv/bin/activate # on linux or macos

source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```
**Set Up Environment Variables**:

Create a **.env** file in the backend/ directory and add:
```bash
GEMINI_API_KEY=your_google_gemini_api_key
```
#### **3. Run the Server**
```bash
python3 run.py
```

The API will be available at http://localhost:5000

# API Endpoints
 - **URL:** `/api/chat`
  - **Method:** `POST`
    - **Request Body:**
  ```json
  {
    "prompt": "Hello, how are you?"
  }
  ```
  - Response
    ```json
    {
      "msg": "I'm an AI chatbot! How can I assist you today?"
    }
    ```

- Error Handling
    - If prompt is missing → returns 400 Bad Request
    - If API key is incorrect → returns 500 Internal Server Error

## **2. Frontend Setup**
```sh
# Navigate to the backend directory
cd frontend

# Install dependencies
npm install

#Start the development server
npm run dev
```
Interact with the UI of the AI Chatbot application below. The frontend is live and ready for use at [http://localhost:3000](http://localhost:3000) (configured port).

![UI](https://res.cloudinary.com/dx8m9dy9d/image/upload/v1739017642/gemini_chatbot_npenzm.png)

### Deployment Links
- Backend (Render): [API URL](https://ai-chatbot-backend-evct.onrender.com)

- Frontend (Vercel): [Web App URL](https://chatbot-web-five.vercel.app)

### Author
- Names: NIYONSHUTI Emmanuel
- [Twitter(X)](https://x.com/NIYONSH77028058)
- [LinkedIn](https://www.linkedin.com/in/niyonshuti-emmanuel-82877b285/)