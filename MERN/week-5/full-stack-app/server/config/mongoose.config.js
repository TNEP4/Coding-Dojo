const mongoose = require('mongoose');


const dbName = 'games';

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`Connected to MongoDB: ${dbName}`);
    })
    .catch(err => {
        console.log(`You had a problem connecting to ${dbName}` + err);
    }
    );


