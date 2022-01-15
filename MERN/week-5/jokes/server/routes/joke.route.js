const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
    app.get('/api/jokes', JokeController.findAll);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.delete('/api/jokes/:id', JokeController.deleteOneJoke);
    app.put('/api/jokes/:id', JokeController.updateOneJoke);
}