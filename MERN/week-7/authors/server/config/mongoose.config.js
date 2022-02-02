const mongoose = require("mongoose");

const dbName = "authors";

mongoose
    .connect(`mongodb://localhost/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((x) => console.log(`Connected to Mongo! Database name: ${dbName}`))
    .catch((err) => console.error("Error connecting to mongo", err));