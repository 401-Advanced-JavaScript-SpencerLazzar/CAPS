

const io = require('socket.io-client');
const faker = require('faker');
const { Socket } = require('socket.io-client');

const vendorSocket = io.connect('http://localhost:3000');

vendorSocket.emit('join', process.env.STORE_NAME);

setInterval(() => {
  console.log('sending order for pickup');

  let order = {
    address: `${faker.address.city()} ${faker.address.state()}`,
    phoneNumber: faker.phone.phoneNumber()
  }
  vendorSocket.emit('pickup', order);
}, 500);



