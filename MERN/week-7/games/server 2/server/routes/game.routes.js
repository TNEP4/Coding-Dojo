//We object an object of key-value pairs from our controller.
//Rather than writing the ENTIRE function, we simply access it using GameController.findAllGames 
    //(or whatever key corresponds with the route)
const GameController = require("../controllers/game.controller");


module.exports = (app) => {
    //if data is only being read, we can use a GET HTTP Verb
    app.get("/api/games", GameController.findAllGames);
    //if data is being sent to my server to create a new document, we use a POST HTTP Verb
    app.post("/api/games", GameController.createNewGame);
    //Make sure calls with params go after the previous calls!    
    app.get("/api/games/:id", GameController.findOneGame); 
    //The parameter id, as defined in the controller MUST MATCH 
        //what we defined it as in the controller!
    app.delete("/api/games/:id", GameController.deleteGame);
    app.put("/api/games/:id", GameController.updateGame);


}