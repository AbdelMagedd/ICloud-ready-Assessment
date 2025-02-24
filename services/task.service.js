const taskRepository = require('../repositories/task.repository');

class TaskService {
    async addTask(taskData) {
        return await taskRepository.createTask(taskData);
    }

    async getTasks() {
        return await taskRepository.getAllTasks();
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