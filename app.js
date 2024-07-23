const express = require('express');
const app = express();
const homeRouter = require('./routers/homeRouter');

app.use('/', homeRouter);


const PORT = 3000;
app.listen(PORT, ()=>{
  console.log('listening on port', PORT);
})