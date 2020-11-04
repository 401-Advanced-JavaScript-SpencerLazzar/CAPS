
eventManager.on('pickup', logEvent);
eventManager.on('in-transit', logEvent);
eventManager.on('delivered', logEvent);


// eventMgr.on('pickup', (payload) => logEvent('pickup', payload));
// eventMgr.on('in-transit', (payload) => logEvent('in-transit', payload));
// eventMgr.on('delivered', (payload) => logEvent('delivered', payload));
const eventManager = require('./events');
const vendorRun = require('./vendor/vendor');


function logEvent(eventType, payload) {

  const output = `
  EVENT { event: '${eventType},
  time: ${new Date()},
  payload: ${JSON.stringify(payload)}
}
  `;

  console.log(output);
}

// const Payload = {
//   store: 'BurgerHaus',
//   orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//   customer: 'Russell Wilson',
//   address: 'Rosyln, WA',
// };

// eventManager.emit('pickup', 'pickup', Payload);
// eventManager.emit('in-transit', 'in-transit', Payload);
// eventManager.emit('delivered', 'delivered', Payload);