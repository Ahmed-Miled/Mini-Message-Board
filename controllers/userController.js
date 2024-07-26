const asyncHandler = require('express-async-handler');
const queries = require('../db/queries');

exports.getIndex = asyncHandler(async (req, res) => {
  const messages = await queries.getAllMessages();
  res.render('index', { messages: messages });
});

exports.getForm = asyncHandler((req, res) => {
  res.render('form');
});

exports.messagePost = asyncHandler(async (req, res) => {
  // lena lazem ysir insert into
  await queries.insertMessage(
    req.body.textMessage,
    req.body.nameMessage,
    new Date().toISOString()
  );
  res.redirect('/');
});

exports.resetForm = asyncHandler(async (req, res) => {
  await queries.resetMessage();
  res.redirect('/');
});