const TaskController = require('../controllers/task.controller');

module.exports = (app) => {
    app.get('/api/tasks', TaskController.findAll);
    app.post('/api/tasks', TaskController.createNewTask);
    app.get('/api/tasks/:id', TaskController.findOneTask);
    app.delete('/api/tasks/:id', TaskController.deleteOneTask);
    app.put('/api/tasks/:id', TaskController.updateOneTask);
}