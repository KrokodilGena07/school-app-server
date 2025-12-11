const express = require('express');
const postsRouter = require('../domain/posts/postsRouter');

const router = express.Router();

router.use('/posts', postsRouter);

module.exports = router;