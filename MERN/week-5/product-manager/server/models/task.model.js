const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A Task's title is required"],
        minlength: [3, "The title must be at least 3 characters long"],
    },
    price: {
        type: Number,
        required: [true, "A Task's price is required"]
    },
    description: {
        type: String,
        required: [true, "We need a description of the Task"],
    }
}, {timestamps: true});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;