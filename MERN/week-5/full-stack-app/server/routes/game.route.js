const GameController = require('../controllers/game.controller');

module.exports = (app) => {
    app.get('/api/games', GameController.findAll);
    app.post('/api/games', GameController.createNewGame);
    app.get('/api/games/:id', GameController.findOneGame);
    app.delete('/api/games/:id', GameController.deleteOneGame);
    app.put('/api/games/:id', GameController.updateOneGame);
}