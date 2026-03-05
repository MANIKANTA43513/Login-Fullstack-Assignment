Full Stack Login Application

A simple full-stack login system built using React (Frontend) and Node.js + Express (Backend).
The application allows users to log in using predefined credentials and displays a welcome page after successful authentication.

---

🚀 Live Demo

Frontend (Vercel):
https://login-fullstack-assignment-4lbo.vercel.app/

Backend API (Render):
https://login-fullstack-assignment.onrender.com/

---

📌 Features

- Simple and clean login UI
- Authentication using backend API
- Error handling for invalid login
- Navigation to welcome page after successful login
- Fully deployed frontend and backend
- Uses Axios for API communication
- Local storage for storing logged-in username

---

🛠️ Tech Stack

Frontend

- React.js
- Axios
- CSS

Backend

- Node.js
- Express.js
- CORS

Deployment

- Frontend → Vercel
- Backend → Render
- Version Control → GitHub

---

📂 Project Structure

login-fullstack-assignment
│
├── backend
│   ├── server.js
│   ├── package.json
│
├── frontend
│   ├── public
│   │   └── index.html
│   │
│   ├── src
│   │   ├── App.js
│   │   ├── Login.js
│   │   ├── Welcome.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   └── package.json
│
└── README.md

---

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/YOUR_USERNAME/login-fullstack-assignment.git

Go to project directory

cd login-fullstack-assignment

---

Run Backend

cd backend
npm install
node server.js

Backend runs on:

http://localhost:5000

---

Run Frontend

cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000

---

🔐 Login Credentials

For testing:

Username: admin
Password: admin

---

🔄 Application Flow

1. User enters username and password on login page
2. React sends POST request to backend API
3. Backend validates credentials
4. If valid → user redirected to welcome page
5. Username stored in browser local storage

---

📡 API Endpoint

Login API

POST /login

Request Body

{
  "username": "admin",
  "password": "admin"
}

Response

Success: 200 OK
Failure: 401 Unauthorized

---

👨‍💻 Author

Manikanta

GitHub:
https://github.com/MANIKANTA43513

---

📄 License

This project is created for learning and assignment purposes.


