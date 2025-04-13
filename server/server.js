const app = require('./app');
const http = require('http');
const { setupSocket } = require('./socket/index');

const server = http.createServer(app);

// Setup WebSocket server
setupSocket(server);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
