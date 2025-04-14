const app = require('./app');
const http = require('http');
const { setupSocket } = require('./socket/socket');
const {initializeData}=require('./utils/dummyDataGenerator')

const server = http.createServer(app);

// Setup WebSocket server
setupSocket(server);

initializeData()

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
