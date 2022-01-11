const mongoose = require("mongoose");

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
