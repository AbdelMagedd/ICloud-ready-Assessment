// controllers/task.controller.js
const taskService = require('../services/task.service');

exports.addTask = async (req, res, next) => {
    try {
        const taskData = req.body;
        const task = await taskService.addTask(taskData);
        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
};

exports.getTasks = async (req, res, next) => {
    try {
        let { page = 1, limit = 10, priority } = req.query;

        page = parseInt(page, 10);
        limit = parseInt(limit, 10);

        if (isNaN(page) || page < 1) page = 1;
        if (isNaN(limit) || limit < 1) limit = 10;

        const offset = (page - 1) * limit;

        const { tasks, totalCount } = await taskService.getTasks(priority, limit, offset);

        res.status(200).json({
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
            totalTasks: totalCount,
            tasks
        });
    } catch (error) {
        next(error);
    }
};


exports.getTaskById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await taskService.getTaskById(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

exports.updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const taskData = req.body;
        const updatedTask = await taskService.updateTask(id, taskData);
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        next(error);
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedTask = await taskService.deleteTask(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        next(error);
    }
};