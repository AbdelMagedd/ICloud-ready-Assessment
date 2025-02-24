const taskModel = require("../models/task.model");


class TaskRepository {
    async createTask(taskData) {
        const task = new taskModel(taskData);
        return await task.save();
    }

    async getAllTasks() {
        return await taskModel.find();
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