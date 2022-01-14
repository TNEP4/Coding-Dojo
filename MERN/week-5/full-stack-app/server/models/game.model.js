const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A game's name is required"],
        minlength: [3, "The name must be at least 3 characters long"],
    },
    yearReleased: {
        type: Number,
        required: [true, "A game's release year is required"],
        min: [1900, "The release year must be after 1900"],
    },
    genre: {
        type: String,
        required: [true, "A game's genre is required"],
        enum: ["Action", "Adventure", "Children", "Fighting", "MMO", "Platformer", "Puzzle", "Racing", "RPG", "RTS", "Shooter", "Simulation", "Sports", "Strategy", "Survival"],
    },
    image: {
        type: String,
        required: [true, "We need a picture of the game"],
    },
    rating: {
        type: String,
        enum: ["T", "M", "MO", "E10", "E", "E7", "E6", "E5", "E4", "E3", "E2", "E1", "No rating"],
    },
    company: {
        type: String,
        required: false,
    }
}, {timestamps: true});

const Game = mongoose.model('Game', GameSchema);
module.exports = Game;