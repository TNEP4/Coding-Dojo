const Task = require('../models/task.model');


module.exports = {
    findAll: function (req, res) {
        Task.find()
            .then(allTasks => {
                console.log(allTasks);
                res.json(allTasks);
            })
            .catch(err => {
                console.log("Find All Tasks failed");
                res.json({ message: "Something went wrong in findAll", error: err });
            })
    },
    createNewTask: function (req, res) {
        Task.create(req.body)
            .then(newTask => {
                console.log(newTask);
                res.json(newTask);
            })
            .catch(err => {
                console.log("Something went wrong in createNewTask");
                res.status(400).json(err);
                res.json({ message: "Something went wrong in createNewTask", error: err });
            })
    },
    findOneTask: function (req, res) {
        Task.findOne({ _id: req.params.id })
            .then(oneTask => {
                console.log(oneTask);
                res.json(oneTask);
            })
            .catch(err => {
                console.log("Find One Task failed");
                res.json({ message: "Something went wrong in findOneTask", error: err });
            })
        },
    deleteOneTask: function (req, res) {
        Task.delete({ _id: req.params.id })
            .then(deletedTask => {
                console.log(deletedTask);
                res.json(deletedTask);
            })
            .catch(err => {
                console.log("delete One Task failed");
                res.json({ message: "Something went wrong in deleteOneTask", error: err });
            })
        },
    updateOneTask: function (req, res) {
        Task.updateOne(
            { _id: req.params.id },
            req.body,
            {new: true, runValidators: true}
            )
            .then(updatedTask => {
                console.log(updatedTask);
                res.json(updatedTask);
            })
            .catch(err => {
                console.log("update One Task failed");
                res.status(400).json(err);
                res.json({ message: "Something went wrong in updateOneTask", error: err });
            })
        }
    }
