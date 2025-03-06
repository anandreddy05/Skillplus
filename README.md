#  AI Course Generator – MERN Stack Project

- A Full-Stack AI Course Generator built with the **MERN (MongoDB, Express, React, Node.js) stack**.
- This application allows users to generate AI-powered courses by selecting a category, difficulty level, and course duration.
- The AI dynamically generates the course outline and content using **Google’s Gemini API or OpenAI's API**.

##  Features & Requirements

### Frontend (React + Vite + TailwindCSS)
- **User Dashboard** → UI for users to input course details and view generated content.
- **Landing Page** → Clean and modern landing page with an overview of the platform.
- **Authentication (JWT-based)** → Secure sign-up, login, and protected routes.
- **State Management** → Redux, Context API, or local state (to be decided).
- **Routing** → React Router for navigation.
- **API Integration** → Connect frontend with backend for fetching/storing data.

###  Backend (Node.js + Express + MongoDB)
- **API Endpoints** → Routes for course generation, authentication, and user management.
- **AI API Integration** → Connect with Google Gemini or OpenAI API for AI-powered course generation.
- **MongoDB Schema Design** → Efficient database structure for users and courses.
- **File Uploads** → Cloudinary integration for course banners.
- **Security** → JWT authentication and best security practices.
- **Error Handling & Optimizations** → Handle errors efficiently and optimize performance.


## ⚙️ Installation Guide

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/anandreddy05/Skillplus.git
cd Skillplus
```
Create a .env file in the backend folder and add:
```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key  # If using OpenAI
GEMINI_API_KEY=your_gemini_api_key  # If using Google Gemini
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```
Start the backend:
```bash
cd backend
node server.js
```
Start the frontend in another terminal
```bash
cd frontend
npm install
npm run dev
```
### API Endpoints
## Authentication (/api/auth)
POST /signup → Register a new user
POST /login → Authenticate user & return JWT
## Course Generation (/api/courses)
POST /generate → Generate AI-powered course content
GET /user-courses → Get user's generated courses
📜 License
This project is open-source and available under the MIT License.
