
// Initialise express and mongoose
const express = require('express');
const mongoose = require('mongoose');
const app = express();


// EXPRESS MIDDLEWARE
// Translate the post body to json
app.use(express.json());
// This parses the body of the request into a json object - regnosing string or arrays as json objects
app.use(express.urlencoded({ extended: true }));


// Call mongoose.config.js
require("./config/mongoose.config");

// Call model from animal.model.js
require("./models/animal.model");

// Call routes from animal.route.js
require("./routes/animal.route")(app);

    

// Port 8000
app.listen(8000, () => console.log('Server started on port 8000'));
