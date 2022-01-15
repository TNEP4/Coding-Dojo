const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "A Joke's name is required"],
        minlength: [3, "The name must be at least 3 characters long"],
    },
    punchline: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;