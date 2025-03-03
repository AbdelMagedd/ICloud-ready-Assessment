const taskRepository = require('../repositories/task.repository');

class TaskService {
    async addTask(taskData) {
        return await taskRepository.createTask(taskData);
    }

    async getTasks(priority, limit, offset, sortBy, order) {
        return await taskRepository.getAllTasks(priority, limit, offset, sortBy, order);
    }

    async getTasksAssignedToUser(priority, limit, offset, sortBy, order, userId) {
        return await taskRepository.getTasksAssignedToUser(priority, limit, offset, sortBy, order, userId);
    }
    async getTaskById(id) {
        return await taskRepository.getTaskById(id);
    }

    async updateTask(id, taskData) {
        return await taskRepository.updateTask(id, taskData);
    }

    async deleteTask(id) {
        return await taskRepository.deleteTask(id);
    }
}

module.exports = new TaskService();