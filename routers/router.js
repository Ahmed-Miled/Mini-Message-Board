const express = require('express');
const router = express.Router();
const newMessage = express.Router();
const deleteRouter = express.Router();
const controller = require('../controllers/userController');

router.get('/', controller.getIndex);

newMessage.get('/', controller.getForm);
newMessage.post('/', controller.messagePost);

deleteRouter.get('/', controller.resetForm);

module.exports = { router, newMessage, deleteRouter };
