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

// Get their order
async function getOrder() {
  console.clear();
  let input = await inquirer.prompt([{ 'name': 'name', 'message': 'What is the order?' }])
  name = input.name;
  console.log(name);
}

getOrder();
getInput();


