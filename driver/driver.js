const net = require('net');
// const eventEmmitter = require('events');
// const eventManager = new eventEmmitter;
const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
client.connect(port, host, () => console.log('client connected on port ', port));


client.on('pickup', (payload) => {

  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    events.emit('in-transit', payload);
  }, 1000);

  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderID}`);
    events.emit('delivered', payload);
  }, 3000);

});