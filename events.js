// Global Event Pool (shared by all modules)

const EventEmitter = require('events');
const events = new EventEmitter();







module.exports = events;

