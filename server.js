'use strict';
const express = require('express');
const app = express();
const EE = require('events');
const events = new EE();
const timeStamp = new Date().toString();
let storeOne = {
  store: '1-206-flowers',
  orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customer: 'Kevin McNeal',
  address: 'WalaWala St.'
}
events.on('pickup', renderPickup);
events.on('inTransit', renderTransit);
events.on('delivered', renderDelivered);
events.emit('pickup', storeOne, renderTime);
events.emit('inTransit', storeOne, renderDelivery);
events.emit('delivered', storeOne, renderDeliveredTime);
// PACKAGE IS READY 
function renderPickup(event, callback) {
  console.log({ EVENT: 'pickup', time: `${timeStamp}`, }, event);
  callback();
}
function renderTime() {
  console.log(`DRIVER: picked up ${storeOne.orderID}`);
}
// PACKAGE IS IN TRANSIT
function renderTransit(event, callback) {
  setTimeout(() => {
    console.log({ EVENT: 'in-transit', time: `${timeStamp}`, }, event);
    callback();
  }, 1000);
}
function renderDelivery() {
  setTimeout(() => {
    console.log(`DRIVER: delivered up ${storeOne.orderID}`);
  }, 1500);
}
// // PACKAGE HAS BEEN DELIVERED
function renderDelivered(event, callback) {
  setTimeout(() => {
    console.log({ VENDOR: `Thank you for delivering ${storeOne.orderID}`, EVENT: 'delivered', time: `${timeStamp}`, }, event);
    callback();
  }, 3000);
}
function renderDeliveredTime(event, callback) {
  setTimeout(() => {
  }, 4000);
}