const express = require('express');
const newMessageRouter = express.Router();

newMessageRouter.get('/', (req, res)=>{
  res.render('form');
})

newMessageRouter.post('/', (req, res)=>{
  console.log(req.body.textMessage);
  res.send('Form submitted successfully!');
});

module.exports = newMessageRouter;