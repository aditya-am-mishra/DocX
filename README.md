# DocX – Client Document Manager

A secure MERN stack application to manage client documents with sharing, access control, and notifications.

***

## 📁 Project Structure

```text
DocX/
├── backend/                # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/        # DB, Cloudinary, and other config
│   │   ├── controllers/   # Route handlers
│   │   ├── middleware/    # Auth, validation, error handlers, etc.
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # REST API routes
│   │   ├── utils/         # Helper utilities
│   │   ├── app.js         # Express app setup
│   │   └── server.js      # Server entry point
│   ├── .env.example       # Backend env template
│   └── package.json
│
├── frontend/               # Frontend (React + Vite)
│   ├── src/
│   │   ├── api/           # API service functions (axios)
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Route pages (Dashboard, Clients, Documents, Auth)
│   │   ├── contexts/      # Auth context, global state
│   │   ├── utils/         # Small helpers
│   │   ├── App.js         # Root component with routes
│   │   └── main.js        # Vite entry point
│   ├── .env.example       # Frontend env template
│   └── package.json
│
└── README.md              # This file
```

***

## 🚀 Quick Start (Local)

### Prerequisites

- Node.js (v18+ recommended)  
- MongoDB Atlas account (or local MongoDB)  
- npm or yarn  

***

### 1️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` from the example:

```bash
cp .env.example .env      # or create manually on Windows
```

Update `.env` with your values, for example:

```env
PORT=5000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRY=7d
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

Start the backend:

```bash
npm run dev
```

Backend runs on `http://localhost:5000`.

***

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` from the example:

```bash
cp .env.example .env      # or create manually on Windows
```

Update `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the React app:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`.

***

## 📚 Tech Stack

### Backend

- Node.js + Express  
- MongoDB + Mongoose  
- JWT authentication  
- Multer for file uploads  
- Cloudinary for file storage  
- Zod for validation  
- Helmet for security headers  
- CORS for cross‑origin protection  
- Express‑rate‑limit for basic rate limiting  

### Frontend

- React 18  
- Vite  
- React Router  
- Axios  
- Context API for auth and global state  

***

## 🔒 Security & Validation

- JWT‑based auth with token expiry  
- File type whitelist (PDF, PNG, DOCX)  
- File size limit (5 MB)  
- Sanitized filenames before upload  
- Request validation with Zod on backend  
- CORS restricted to known origins  
- Helmet for secure HTTP headers  
- Rate limiting on sensitive routes  
- Access control based on **creator**, **shared users**, and **public** documents  

***


## 📦 What This Repo Includes

- Full **DocX** backend and frontend code  
- Environment variable templates for both sides  
- Local development setup mirroring production architecture  
- Structured controllers, routes, models, middleware, and React components  
- End‑to‑end document upload, sharing, and notification flow  

***

Screenshots:
login page:
<img width="1887" height="879" alt="image" src="https://github.com/user-attachments/assets/8ec39479-3240-4966-a381-d395c43ac47d" />

dashboard:
<img width="1882" height="934" alt="image" src="https://github.com/user-attachments/assets/83cbcaaa-8ee9-46c0-b10b-9d092ead38a8" />

## 👨‍💻 Developer

Built and customized by **Aditya Mishra** for the **DocX** project.
