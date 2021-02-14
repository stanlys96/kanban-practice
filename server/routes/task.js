const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authorize');

const taskController = require('../controllers/taskController');

router.use(authenticate);
router.post('/', taskController.addTask);
router.get('/', taskController.getTasks);
router.put('/:id', authorize, taskController.editTask);
router.delete('/:id', authorize, taskController.deleteTask);

module.exports = router;