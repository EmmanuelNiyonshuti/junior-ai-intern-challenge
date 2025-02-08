# AI Chatbot - Backend

This is the backend service for the AI Chatbot, built using **Flask**.  
It processes user input and interacts with [Google Gemini API](https://ai.google.dev/gemini-api) to generate responses.

## Features
- Flask-based REST API
- AI-powered chatbot using [Google Gemini API](https://ai.google.dev/gemini-api)
- Supports **POST** requests to generate AI responses
- Deployed on **Render**

## Project Structure
```
backend/
    ├── app/                   # Application package
        ├── __init__.py            # App factory function
        ├── routes/            # API route handlers
            ├── __init__.py        # Blueprint initialization 
            ├── chatbot.py     # Chat endpoint logic (handles Gemini API calls) 
    ├── requirements.txt       # Project dependencies
    ├── run.py                 # Entry point to start the Flask server
    ├── .env                   # API key configuration (not committed to Git) 
    └── README.md # Backend documentation
```

## Setup Guide
#### **1. Install Dependencies**

```bash
 #Navigate to the backend directory
 cd backend

# (Optional) Create and activate a virtual environment to avoid dependency conflicts
python -m venv .venv  
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

#### **2. Set Up Environment Variables**
Create a **.env** file in the backend/ directory and add:
```bash
GEMINI_API_KEY=your_google_gemini_api_key
```
#### **3. Run the Server**
```bash
python3 run.py
```
The API will be available at http://localhost:5000


## API Endpoints
### **1 Generate AI Response**
- **URL:** `/api/chat`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "prompt": "Hello, how are you?"
  }
- **Response**
```json
    {
      "msg": "I'm an AI chatbot! How can I assist you today?"
    }
```

##### Error Handling:
- If prompt is missing → returns 400 Bad Request
- If API key is incorrect → returns 500 Internal Server Error

### Deployment
The backend is deployed on Render.
You can access it here:
- [API URL](https://ai-chatbot-backend-evct.onrender.com)

### Author
- Names: NIYONSHUTI Emmanuel
- [Twitter(X)](https://x.com/NIYONSH77028058)
- [LinkedIn](https://www.linkedin.com/in/niyonshuti-emmanuel-82877b285/)
