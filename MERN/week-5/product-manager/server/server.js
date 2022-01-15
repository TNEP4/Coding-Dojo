const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
}));

// need to require config file
require('./config/mongoose.config');
// need to require routes
require('./routes/task.route')(app);

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
