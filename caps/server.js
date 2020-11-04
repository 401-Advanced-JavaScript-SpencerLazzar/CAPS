const net = require('net');

const port = process.env.PORT || 3000;
const server = net.createServer();


server.listen(port, () => console.log('Server up on port ', port));


const socketPool = {}

server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  socketPool[id] = socket;
  console.log('Socket connection', id);
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('error', (e) => { console.error('SOCKET ERROR', e) });
  socket.on('end', (e) => { delete socketPool[id] });
  broadcast('Just checking')
});

server.on('error', (e) => {
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
  }
}