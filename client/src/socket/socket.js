import { io } from 'socket.io-client';

const baseURL = process.env.REACT_APP_BASE_URL || ""


const socket = io(baseURL, {
  transports: ['websocket'],
  reconnection: true,
});

export default socket;
