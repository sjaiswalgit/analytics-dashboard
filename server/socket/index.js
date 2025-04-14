const { Server } = require('socket.io');

var io;

function setupSocket(server) {
  io = new Server(server, {
    cors: {
      origin: '*', // You can whitelist specific domains if needed
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`🟢 Client connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`🔴 Client disconnected: ${socket.id}`);
    });
  });
}

const getIO = () => io;

module.exports = { setupSocket, getIO};
