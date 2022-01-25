const mongoose = require("mongoose");
//Create a model/ and schema to shape/structure our document 
    //and connect with a specific collection in the db

//Our Schema defines the structure of the document, default values and validators.

const GameSchema = new mongoose.Schema({

    // an _id field is AUTOMATICALLY created each time we add a new document

    name: {
        type: String,
        //Our validatoions are defined right here in our schema
        //Most take two values, the criteria and the message!
        required: [true, "A game's name is required!"],
        minlength: [3, "Name's length must be at least 3 characters!"] //For strings, we use minlength/maxlength
    },

    yearReleased: {
        type: Number,
        //The messages from valids will be accessible after we set our 
            //res.status(400).json(err) in our controller
        required: [true, "A game's release year is required!"],
        min: [ 1950, "No video game was made before the year 1950! Pick a higher year!"] //For Numbers, we use min/max
    },

    genre: {
        type: String,
        required: [true, "Need a genre!!!"],
        //An enum will require this field's value in the request to 
            //include one of these values EXACTLY as typed here
        enum: [
            "Action",
            "Platformer",
            "Survival",
            "RPG",
            "FPS",
            "RTS",
            "MMO",
            "Puzzle",
            "Sports",
            "Adventure",
            "Children's"
        ]
    },

    image:{
        type: String,
        required: [true, "We need a picture!!!!"] //url of image from internet
    },

    rating:{
        type: String,
        enum: [
            "T",
            "E",
            "MA",
            "AO",
            "E10",
            "Y",
            "No rating"
        ]
    },

    company:{
        type: String
    }


}, {timestamps: true})

//timestamps automatically create "createdAt" and"updatedAt" date and time info for each document
//everytime a doc is updated, it will change the "updatedAt"

//The Model is a combination of the:
//1. Collection name which will be a singular, capitalized version of the collection name that's held in the db (will show in our db as "games")
//2. The Schema 

const Game = mongoose.model("Game", GameSchema);
//Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc. 


//We export the model to be imported and used in our controller. We will write Musician.find({}) for example to find all documents inside of the musician collection we've created!

module.exports = Game;