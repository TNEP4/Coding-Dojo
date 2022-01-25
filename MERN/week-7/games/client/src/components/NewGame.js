import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import Form from './Form';

import Header from './Header';

const NewGame = (props) =>{

    // const [name, setName] = useState("")
    // //our api actually turns this into a number due to its "type" in our schema, 
    //     //so we do not need to specify that here. Pretty convenient!
    // const [yearReleased, setYearReleased] = useState("")
    // const [genre, setGenre] = useState("")
    // const [image, setImage] = useState("")
    // const [rating, setRating] = useState("")
    // const [company, setCompany] = useState("")

    //We create state to hold onto errors that come about due to
    //our Schema's validators not being met when we try to post!
    const [errors, setError] = useState({})

        //We've refactored all of those useState hooks from W6D2 into this single state object!
    const [newGame, setNewGame] = useState({//we spell these out as to not get uncontrolled inputs errors
        name: "",
        yearReleased: "",
        genre: "",
        image: "",
        rating: "",
        company: ""
    })


    const newSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/games",
        //After refactoring, we only need to send this single piece of state.
        newGame)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            //if we had to do everything in one view (display/create)
            //it would look something like this:
            // setGameList([...gameList, res.data])
            //since our NewGame component does not share a view/path
                //with the display, we do not have to handle state immediately
            //When we navigate() back to the "AllGames" component,
                //it will trigger a total render of the component, triggering AllGames' useEffect 
                    //which runs setGameList after it's been updated here via our axios.post!
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            //If we do not fulfill our validators from the schema, 
            //then we will hit the catch. Follow the flow of data in your console.logs below
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors)
        })
    }

    return(
        <div>
            {/* See AllGames notes for the Header child component */}
            <Header
                link={"/"}
                linkText={"Return Home"}
                titleText={"Add a Game!"}
            />
            {/* Try looking at this and EditGame.js side-by-side to see the differences and how everything adds up! */}
            <Form 
            game={newGame}
            setGame={setNewGame}
            //our submitHandlers are slightly different from this component and EditMusician. By adding in the value of this specific handler, we can ensure our submitHandler in Form is the value from the currently rendered parent component (New or Edit).
            submitHandler={newSubmitHandler}
            errors={errors}
            //button in our Form.js will show different text depending on which parent component is currently rendering
            buttonText={"Add Game"}
            />


            
        </div>
    )
}


export default NewGame;