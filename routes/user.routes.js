const express = require('express');

const taskController = require('../controllers/task.controller');

const router = express.Router();


router.get('/:userId/tasks', taskController.getTasksAssingedToUser);
module.exports = router;
