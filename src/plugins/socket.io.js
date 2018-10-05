import io from 'socket.io-client';
//const io = require('socket.io-client');
let socket = io(`http://${process.env.SOCKET_NODE_HOST}`, { autoConnect: false });

export default socket;