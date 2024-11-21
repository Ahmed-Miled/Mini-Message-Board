require('dotenv').config()  
const express = require('express');
const path = require('path');
const app = express();
const { router, newMessage, deleteRouter } = require('./routers/router');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//  parse the form data into req.body
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use('/new', newMessage);
app.use('/delete', deleteRouter)

app.use((req, res, next) => {
  res.status(404).send('Page not found !');
});

app.use((err, req, res, next) => {
  console.error('Error details:', err); 
  res
    .status(500)
    .send('Sorry, something went wrong on our end. Please try again later.');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
