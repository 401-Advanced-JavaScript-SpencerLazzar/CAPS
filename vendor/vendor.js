const inquirer = require('inquirer');
const net = require('net');
const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
client.connect(port, host, () => { });


let name = '';
const messages = [];

const payload = {
  store: 'BurgerHaus',
  orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customer: 'Russell Wilson',
  address: 'Rosyln, WA',
};

client.on('data', function (data) {
  let event = JSON.parse(data);
  if (event.event === "message") {
    messages.push(event.payload);
    console.clear();
    messages.forEach(message => console.log(message));
    console.log('');
  }
});

function sendMessage(text) {
  console.log('sending', text);
  let message = `[${name}]: ${text}`;
  let event = JSON.stringify({ event: 'message', payload: message });
  client.write(event);
}



async function getInput() {
  let input = await inquirer.prompt([{ 'name': 'text', 'message': ' ' }])
  sendMessage(input.text);
  getInput();
}

// Get their name
async function getOrder() {
  console.clear();
  let input = await inquirer.prompt([{ 'name': 'name', 'message': 'What is the order?' }])
  order = input.order;
}

getOrder();
getInput();



// const storeName = 'BurgerHaus';


// function run() {
//   setInterval(() => {
//     const payload = {
//       store: storeName,
//       orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//       customer: 'Russell Wilson',
//       address: 'Rosyln, WA',
//     }
//     eventManager.emit('pickup', 'pickup', payload);
//   }, 5000);
// }

// eventManager.on('delivered', () => {
//   console.log('VENDOR: Thank you for delivering ' + payload.orderID);
// })

// module.exports = run;