const express = require('express');
const router = express.Router();
const newMessage = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini message App', messages: messages });
});

newMessage.get('/', (req, res) => {
  res.render('form');
});

newMessage.post('/', (req, res) => {
  console.log(req.body.textMessage);
  res.send('Form submitted successfully!');
});

module.exports = { router, newMessage };
