# Chatbot Web (Frontend)

This is the frontend of the **AI Chatbot** project, built using **React + Vite**. It interacts with the Flask backend to provide AI-generated responses using [Google Gemini API](https://ai.google.dev/gemini-api).

# Table of Contents
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Guide](#setup-guide)
- [Deployment](#deployment)
- [Author](#author)

# Tech Stack
- React (Frontend UI)
- Vite (Build tool for fast development)
- fetch (For API requests)
- Tailwind CSS (For styling)

# Features
- Built with **React** and **Vite** for fast development.
- Fetches chatbot responses from the backend API.
- Modern and responsive UI.

# Project Structure
```
frontend/
    ├── public/                     # Static assets
            └── image.png           # Example image asset
    ├── src/ # Source files
        ├── assets/                 # Folder for assets (currently empty)
        ├── components/             # UI components
            ├── ChatInterface.jsx   # Main chatbot interface
            ├── Footer.jsx          # Footer component
            ├── Header.jsx          # Header component
        ├── index.css               # Global styles
        ├── App.jsx                 # Main application component
        ├── main.jsx                # Entry point for React
    ├── .eslint.config.js           # ESLint configuration
    ├── index.html                  # Main HTML template
    ├── package.json                # Project dependencies & scripts
    ├── package-lock.json           # Dependency lock file
    ├── vite.config.js              # Vite configuration
    ├── README.md                   # Project documentation

```

# Setup Guide
```sh
cd frontend
# Install dependencies
npm install

#Start the development server
npm run dev

The frontend will be available at http://localhost:3000 #default Vite port is 5173, but this project is configured to use 3000 in vite.config.js
```

# Deployment
- Hosted on Vercel: [Chatbot Web URL](https://chatbot-web-five.vercel.app)

# Author
- Names: NIYONSHUTI Emmanuel
- [Twitter(X)](https://x.com/NIYONSH77028058)
- [LinkedIn](https://www.linkedin.com/in/niyonshuti-emmanuel-82877b285/)