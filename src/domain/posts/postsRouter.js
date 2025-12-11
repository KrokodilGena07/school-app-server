const express = require('express');
const postsController = require('./postsController');

const postsRouter = express.Router();

postsRouter.post('/', postsController.create);
postsRouter.get('/', postsController.get);

module.exports = postsRouter;