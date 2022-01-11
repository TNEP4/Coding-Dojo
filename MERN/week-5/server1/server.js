
// Initialise express and mongoose
const express = require('express');
const mongoose = require('mongoose');
const app = express();


// EXPRESS MIDDLEWARE
// Translate the post body to json
app.use(express.json());
// This parses the body of the request into a json object - regnosing string or arrays as json objects
app.use(express.urlencoded({ extended: true }));

// name db
const dbName = "animals2";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to the ${dbName} MongoDB`);
    })
    .catch((err => {
        console.log(`There is an error in the ${dbName} MongoDB connection: ${err}`);
    }));



// Model
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

app.post("/api/animals", (req, res) => {
    Animal.create(req.body)
        .then((newAnimal) => {
            console.log(newAnimal);
            res.json(newAnimal);
        })
        .catch((err) => {
            res.json(err);
        });
});


app.get("/api/animals", (req, res) => {
    Animal.find()
        .then((allAnimals) => {
            console.log(allAnimals);
            res.json(allAnimals);
        })
        .catch((err) => console.log(err))
    });


app.get("/api/animals/:id", (req, res) => {
    Animal.findOne({_id: req.params.id})
        .then((oneAnimal) => {
            console.log(oneAnimal);
            res.json(oneAnimal);
        })
        .catch((err) => console.log(err))
    });

app.delete("/api/animals/:id", (req, res) => {
    Animal.deleteOne({_id: req.params.id})
        .then((deletedAnimal) => {
            console.log(deletedAnimal);
            res.json(deletedAnimal);
        })
        .catch((err) => console.log(err))
    });

app.put("/api/animals/:id", (req, res) => {
    Animal.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then((updatedAnimal) => {
            console.log(updatedAnimal);
            res.json(updatedAnimal);
        })
        .catch((err) => console.log(err))
    });
    

// Port 8000
app.listen(8000, () => console.log('Server started on port 8000'));
