const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const tasksRouter = require('./task');

router.use('/user', userRouter);
router.use('/tasks', tasksRouter);

module.exports = router;