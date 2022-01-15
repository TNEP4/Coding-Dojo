const Joke = require('../models/joke.model');


module.exports = {
    findAll: function (req, res) {
        Joke.find()
            .then(allJokes => {
                console.log(allJokes);
                res.json(allJokes);
            })
            .catch(err => {
                console.log("Find All Jokes failed");
                res.json({ message: "Something went wrong in findAll", error: err });
            })
    },
    createNewJoke: function (req, res) {
        Joke.create(req.body)
            .then(newJoke => {
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch(err => {
                console.log("Something went wrong in createNewJoke");
                res.status(400).json(err);
                res.json({ message: "Something went wrong in createNewJoke", error: err });
            })
    },
    findOneJoke: function (req, res) {
        Joke.findOne({ _id: req.params.id })
            .then(oneJoke => {
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch(err => {
                console.log("Find One Joke failed");
                res.json({ message: "Something went wrong in findOneJoke", error: err });
            })
        },
    deleteOneJoke: function (req, res) {
        Joke.remove({ _id: req.params.id })
            .then(deletedJoke => {
                console.log(deletedJoke);
                res.json(deletedJoke);
            })
            .catch(err => {
                console.log("delete One Joke failed");
                res.json({ message: "Something went wrong in deleteOneJoke", error: err });
            })
        },
    updateOneJoke: function (req, res) {
        Joke.updateOne(
            { _id: req.params.id },
            req.body,
            {new: true, runValidators: true}
            )
            .then(updatedJoke => {
                console.log(updatedJoke);
                res.json(updatedJoke);
            })
            .catch(err => {
                console.log("update One Joke failed");
                res.status(400).json(err);
                res.json({ message: "Something went wrong in updateOneJoke", error: err });
            })
        }
    }
