

const io = require('socket.io-client');

const driverSocket = io.connect('http://localhost:3000');

driverSocket.emit('getPickups');

driverSocket.on('pickup', (payload) => {

  driverSocket.emit('recieved', payload.orderID);

  setTimeout(() => {
    console.log('picking up', payload.orderID);

    driverSocket.emit('inTransit', payload);
  }, 1500);

  setTimeout(() => {
    console.log('delivered', payload.orderID);
    driverSocket.emit('delivered', payload);
  }, 3000);
});