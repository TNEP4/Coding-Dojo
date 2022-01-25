const mongoose = require("mongoose");
//Here, we are configuring and establishing our connection to the mongoDB

const dbName = "gamesDB";

//If a DB by this name does NOT exist before running the first time, then this will create it!

mongoose.connect(`mongodb://localhost/${dbName}`, {
    // Note: The useNewUrlParser and useUnifiedTopology are options we pass to handle deprecation warnings in our terminal.
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        //This message let's us know we're connected to our db
        console.log(`You are connected to the database called ${dbName}`)
    })
    .catch((err)=>{
        console.log(`you had a problem connectiing the the${dbName}. Here is your error:`, err)
    })
