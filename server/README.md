# 🧠 Real-Time Dashboard — Server

This is the **backend** of the Real-Time Dashboard project, built with **Node.js**, **Express**, and **Socket.IO**. It simulates and emits mock data to all connected WebSocket clients in real-time.

---

## 📁 Project Structure

```
server/
├── server.js                        # Main server entry point
├── app.js                           # Express setup 
├── routes                           # Folder for api routes
├── controller                       # Folder for api handling
├── socket/socket.js                 # Socket.IO configuration and event handling
├── utils/dummyDataGenerator.js      # Mock data generation logic
└── package.json                     # Server dependencies and scripts
```

---

## 🚀 Getting Started

### 1. Install Dependencies

From the root or inside the `/server` directory:

```bash
cd server
npm install
```

### 2. Run the Server

```bash
npm run dev
```

This starts the server on the port specified in your `.env` file (defaults to `8080` if unspecified) and begins emitting data every 5 seconds to all connected clients.

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server/` directory to configure settings:

```
PORT=8080
```
