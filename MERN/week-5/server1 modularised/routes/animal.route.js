//import controller
const AnimalController = require('../controllers/animal.controller');

module.exports = (app) => {
    app.post('/api/animals', AnimalController.createNewAnimal);
    app.get('/api/animals', AnimalController.getAllAnimals);
    app.get('/api/animals/:id', AnimalController.getOneAnimal);
    app.delete('/api/animals/:id', AnimalController.deleteOneAnimal);
    app.put('/api/animals/:id', AnimalController.updateOneAnimal);
};