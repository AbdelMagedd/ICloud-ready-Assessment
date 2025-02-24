const taskModel = require("../models/task.model");


class TaskRepository {
    async createTask(taskData) {
        const task = new taskModel(taskData);
        return await task.save();
    }

    async getAllTasks(priority, limit, offset) {
        const filter = {};

        if (priority && ['low', 'medium', 'high'].includes(priority)) {
            filter.priority = priority;
        }

        const tasks = await taskModel.find(filter).skip(offset).limit(limit);
        const totalCount = await taskModel.countDocuments(filter);

        return { tasks, totalCount };
    }


    async getTaskById(id) {
        return await taskModel.findById(id);
    }

    async updateTask(id, taskData) {
        return await taskModel.findByIdAndUpdate(id, taskData, { new: true });
    }

    async deleteTask(id) {
        return await taskModel.findByIdAndDelete(id);
    }
}

module.exports = new TaskRepository();