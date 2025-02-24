const express = require('express');

const { validateTask, validate } = require('../middlewares/taskValidation.middleware');
const taskController = require('../controllers/task.controller');

const router = express.Router();

router.post('/add', validateTask, validate, taskController.addTask);
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.put('/:id', validateTask, validate, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
