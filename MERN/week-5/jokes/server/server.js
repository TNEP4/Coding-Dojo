const express = require('express');
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// need to require config file
require('./config/mongoose.config');
// need to require routes
require('./routes/joke.route')(app);

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
