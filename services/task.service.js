const taskRepository = require('../repositories/task.repository');

class TaskService {
    async addTask(taskData) {
        return await taskRepository.createTask(taskData);
    }

    async getTasks(priority, limit, offset) {
        return await taskRepository.getAllTasks(priority, limit, offset);
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