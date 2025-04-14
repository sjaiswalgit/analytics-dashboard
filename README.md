# 🚀 Real-Time Dashboard (Monorepo)

This project is a full-stack real-time dashboard using **React** for the frontend and **Express + Socket.IO** for the backend. It simulates live data updates via mock data generated on the server and broadcasts those updates to connected clients using WebSockets.

---

## 📦 Getting Started Locally

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/my-demo.git
```

Or, if you're using a ZIP:

```bash
unzip my-demo.zip
```

---

### 2. **Start Development Servers**

To start **both** server and client:

```bash
npm install
npm run dev
```

#### To run only the **server**:

```bash
cd server
npm install
npm run dev
```

#### To run only the **client**:

```bash
cd client
npm install
npm start
```

---

### 3. **Build for Production**

To build and run the production version:

```bash
npm install
npm run deploy
```

---

## 🧰 Technologies / Libraries Used

### Frontend
- React
- Axios
- Socket.IO Client
- Rechart

### Backend
- Node.js
- Express
- Socket.IO
- dotenv
- CORS

---

## 🧩 Summary

### 🔍 Challenges
- Ensuring WebSocket connects before dummy data starts
- Sharing socket instance safely across modules
- Updating UI without stale state or memory leaks

### 📌 Assumptions
- All clients receive the same data
- Mock data is server-generated and not persisted
- Emits new data every 5 seconds

### 💡 Improvements
- Add database (MongoDB/PostgreSQL) for persistent storage
- Add per-user channeling via WebSocket rooms
- Add authentication (JWT/OAuth)
- Add Docker and CI/CD pipeline support
