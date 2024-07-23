const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res)=>{
  res.status(200).send('this is home');
})

module.exports = homeRouter;