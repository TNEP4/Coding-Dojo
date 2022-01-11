const mongoose = require("mongoose");

// Id is created automatically
const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age : {
        type: Number,
    },
    weight : {
        type: Number,
    },
    isFurry : {
        type: Boolean,
    }
}, {timestamps: true});
// Timestamps are created automatically, "createdAt" and "updatedAt"


// The model is a comnimation of the:
// 1. collectionName which will be a singular, capitalised version of the collection name that is held in the db
// 2. The Schema

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;