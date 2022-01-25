const Game = require('../models/game.model');

//We are exporting an object of key value pairs. 
    //The Key being how we're referring to our calls
// And the Call itself (arrow func), being the value! 
    //We can easily access these in the musician.routes.js

module.exports = {

    findAllGames: (req, res) =>{
    //use the model to connect to the collection and 
        //find/return all documents from our games collection  
        Game.find()
            .then((allGames)=>{
                console.log(allGames);
                res.json(allGames);
            })
            .catch((err)=>{
                console.log("Find All Games failed");
                res.json({message: "Something went wrong in findAll", error: err})
            })
    },

    createNewGame: (req, res)=>{
        Game.create(req.body)
            .then((newGame)=>{
                console.log(newGame);
                res.json(newGame)
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewGame");
                //We set the response status of 400 to 
                    //display our err, which is the rejection of our promise.

                //A 400 status means our client is talking 
                    //to our server just fine, but the client isn't sending good info.

                //This is how we will eventually display 
                    //our validations from the server in react!

                //A 404 status error means the client's 
                    //request isn't to the right place or your server is not set up properly

                //On the flip-side, a status of 200 means we are looking good!
                res.status(400).json(err);
            })
    },

    findOneGame: (req, res)=>{
        //We use the paramater's (params) or the client's request to search for a
            //specific document by the field (here _id) specified
        Game.findOne({_id: req.params.id}) 
        //the parameter id MUST MATCH how we write it in our routes!!!
            .then((oneGame)=>{
                console.log(oneGame);
                res.json(oneGame)
            })
            .catch((err)=>{
                console.log("Find One Game failed");
                res.json({message: "Something went wrong in findOneGame", error: err})
            })
    },

    deleteGame: (req, res)=>{
        Game.deleteOne({_id: req.params.id})
            .then((deletedGame)=>{
                console.log(deletedGame);
                res.json(deletedGame)
            })
            .catch((err)=>{
                console.log("Delete One Game failed");
                res.json({message: "Something went wrong in deleteOne", error: err})
            })
    },

    updateGame: (req, res)=>{
        //This Mongoose query requires both a parameter AND body from the request!
        Game.findOneAndUpdate({_id: req.params.id},
            req.body,
            //These options return a new doc and allow schema valids to run on PUT req
            {new: true, runValidators: true} 
            )
            .then((updatedGame)=>{
                console.log(updatedGame);
                res.json(updatedGame)
            })
            .catch((err)=>{
                console.log("Something went wrong in updateGame");
                res.status(400).json(err); //See above
            })
    }

}


//ALTERNATIVE WAY TO WRITE IN IN THE PLATFORM.
//THEY HAVE MODULE.EXPORT.KEY_NAME FOR EVERY SINGLE METHOD
//I THINK THIS WAY IS EASIER, BUT THEY ARE ULTIMATELY THE SAME, SO DO WHAT FEELS GOOD!


// module.exports.findAllGames = (req, res) => {
//     Game.find({})
//         .then(allGames => res.json(allGames))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// },

// module.exports.findOneGame = (req, res) =>{
//     Game.findOne({_id: req.params.id})
//         .then((oneGame)=>{
//             console.log(oneGame);
//             res.json(oneGame)
//         })
//         .catch((err)=>{
//             console.log("Find one game failed");
//             res.json({ message: 'Something went wrong in findOneGame', error: err });
//         })
// }