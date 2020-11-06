

const io = require('socket.io');
const PORT = process.env.PORT || 3000;

const server = io(PORT);

const queue = {
  pickup: {},
  inTransit: {}
}


server.on('connection', (socket) => {

  socket.on('pickup', payload => {
    let id = Math.floor(Math.random() * 1000000);

    // add something to a queue;
    queue.pickup[id] = payload;
    console.log(queue, payload);
    socket.broadcast.emit('pickup', { id, payload });
  });

  socket.on('inTransit', order => {
    let { id, payload } = order;

    delete queue.pickup[id];
    queue.inTransit[id] = payload;

    console.log(queue);
    socket.broadcast.emit('inTransit', payload);
  })

  socket.on('getPickups', () => {
    Object.keys(queue.pickup).forEach(id => {
      socket.emit('pickup', { id, payload: queue.pickup[id] });
    });
  })

  socket.on('delivered', (orderID) => {
    delete queue.inTransit[orderID];
    console.log('order delivered ' + orderID);
  });

})