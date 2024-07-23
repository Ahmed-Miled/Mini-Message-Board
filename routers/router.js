const express = require('express');
const router = express.Router();
const newMessage = express.Router();

const date = new Date();
const formattedDate = date.toString().slice(0, 24);
const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: formattedDate,
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: formattedDate,
  },
];

router.get('/', (req, res) => {
  res.render('index', { messages: messages });
});

newMessage.get('/', (req, res) => {
  res.render('form');
});

newMessage.post('/', (req, res) => {
  console.log(req.body.textMessage);

  messages.push({
    text: req.body.textMessage,
    user: req.body.nameMessage,
    added: formattedDate,
  });
  res.redirect('/');
});

module.exports = { router, newMessage };
