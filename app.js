const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routers/homeRouter');
const newMessageRouter = require('./routers/newMessageRouter');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//  parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log('listening on port', PORT);
})