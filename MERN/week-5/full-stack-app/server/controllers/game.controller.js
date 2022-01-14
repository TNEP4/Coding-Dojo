const Game = require('../models/game.model');


module.exports = {
    findAll: function (req, res) {
        Game.find()
            .then(allGames => {
                console.log(allGames);
                res.json(allGames);
            })
            .catch(err => {
                console.log("Find All Games failed");
                res.json({ message: "Something went wrong in findAll", error: err });
            })
    },
    createNewGame: function (req, res) {
        Game.create(req.body)
            .then(newGame => {
                console.log(newGame);
                res.json(newGame);
            })
            .catch(err => {
                console.log("Something went wrong in createNewGame");
                res.status(400).json(err);
                res.json({ message: "Something went wrong in createNewGame", error: err });
            })
    },
    findOneGame: function (req, res) {
        Game.findOne({ _id: req.params.id })
            .then(oneGame => {
                console.log(oneGame);
                res.json(oneGame);
            })
            .catch(err => {
                console.log("Find One Game failed");
                res.json({ message: "Something went wrong in findOneGame", error: err });
            })
        },
    deleteOneGame: function (req, res) {
        Game.delete({ _id: req.params.id })
            .then(deletedGame => {
                console.log(deletedGame);
                res.json(deletedGame);
            })
            .catch(err => {
                console.log("delete One Game failed");
                res.json({ message: "Something went wrong in deleteOneGame", error: err });
            })
        },
    updateOneGame: function (req, res) {
        Game.updateOne(
            { _id: req.params.id },
            req.body,
            {new: true, runValidators: true}
            )
            .then(updatedGame => {
                console.log(updatedGame);
                res.json(updatedGame);
            })
            .catch(err => {
                console.log("update One Game failed");
                res.status(400).json(err);
                res.json({ message: "Something went wrong in updateOneGame", error: err });
            })
        }
    }
