const { Server } = require('socket.io');

let io;

function setupSocket(server) {
  io = new Server(server, {
    cors: {
      origin: '*', // You can whitelist specific domains if needed
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`🟢 Client connected: ${socket.id}`);

    // Example: Listen for custom event
    socket.on('sendMessage', (data) => {
      console.log('Message received:', data);

      // Example: Emit event to all clients
      io.emit('receiveMessage', data);
    });

    socket.on('disconnect', () => {
      console.log(`🔴 Client disconnected: ${socket.id}`);
    });
  });
}

module.exports = { setupSocket, getIO: () => io };
