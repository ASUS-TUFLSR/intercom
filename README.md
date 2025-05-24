Intercom-Style Admin Panel with Gemini AI Integration

This project is a React + Express (MERN Stack) admin panel inspired by Intercom, enhanced with Gemini AI (Google Cloud's Vertex AI) to provide intelligent summarization of support tickets.

🌟 Features

✅ Admin Dashboard UI
✅ Ticket Viewing and Replying
✅ AI-Powered Summarization of Ticket Messages
✅ Responsive Design
✅ Modular Code Structure

🏗️ Project Structure

intercom-admin-panel/
├── backend/
│   ├── routes/
│   │   └── ai.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TicketList.jsx
│   │   │   └── TicketDetails.jsx
│   │   └── App.jsx
│   └── .env
├── config/
│   └── keyfile.json (Service Account Key)
├── README.md
└── package.json

🔑 Required Keys & Configuration

1️⃣ Google Cloud Setup

Service Account Key: Create and download JSON key from Google Cloud Console (IAM & Admin → Service Accounts).

Project ID: Find in Google Cloud Console.

Location: e.g., us-central1.

Vertex AI Endpoint ID: (If using custom endpoint).

2️⃣ .env Files

🔐 Backend .env

GOOGLE_APPLICATION_CREDENTIALS=./config/keyfile.json
GC_PROJECT_ID=your-google-cloud-project-id
GC_LOCATION=us-central1
GC_VERTEX_AI_ENDPOINT_ID=your-vertex-ai-endpoint-id

⚙️ Running the Project

📦 Install Dependencies

# Backend
cd backend
npm install

# Frontend
cd frontend
npm install

🚀 Start the Application

# Backend (port 5000)
cd backend
node server.js

# Frontend (port 3000)
cd frontend
npm start

🔗 Access the App

Open your browser at http://localhost:3000

💻 How It Works

1️⃣ Users interact with the frontend admin panel (React).
2️⃣ When a ticket is viewed, clicking Summarize sends a POST request to /api/ai/summarize.
3️⃣ The backend Express server uses Google Cloud Vertex AI (Gemini) to summarize ticket content.
4️⃣ The summary is displayed in the ticket view.

📚 Additional Setup Notes

✅ Enable Vertex AI API in Google Cloud Console.
✅ Download and store the keyfile.json in ./config.
✅ For local dev, use the .env files to store sensitive keys.