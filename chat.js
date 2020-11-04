const net = require('net');

const cliet = new net.Socket();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

client.connnect(port, host, () => { });


let name = '';
const messages = [];

client.on('data', function (data) {
  let event = JSON.parse(data);
  console.log(event);
})
