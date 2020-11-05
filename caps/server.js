const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = 3000 || process.env.PORT;



io.on('connection', socket => {
  console.log('New WebSocket Connection..');

  const id = `Socket-${Math.random()}`;
  socketPool[id] = socket;

  console.log('Socket connection', id);

  socket.on('data', (buffer) => dispatchEvent(buffer));

  socket.on('error', (e) => { console.error('SOCKET ERROR', e) });

  socket.on('end', (e) => { delete socketPool[id] });
  broadcast('Just checking')
});

io.on('error', (e) => {
  console.error('SERVER ERROR', e.message);
});

function dispatchEvent(buffer) {
  let message = JSON.parse(buffer.toString().trim());
  console.log(message);
  broadcast(message);
}


function broadcast(message) {
  let payload = JSON.stringify(message);
  for (let socketID in socketPool) {
    const socket = socketPool[socketID];
    socket.write(payload);
    console.log(payload);
  }
}


server.listen(PORT, () => console.log(`Server running on port, ${PORT}`));

