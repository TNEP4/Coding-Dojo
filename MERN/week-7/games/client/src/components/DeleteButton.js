import React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const DeleteButton = (props)=>{

    //IF working with a callback function, you can destructure that from props
        //as callbackFunction
    const {id, gameList, setGameList} = props;

    //our normal filter functionality to immediately delete something from the front-end.
    //only needed in AllGames
    const deleteFilter = (id)=>{
        setGameList(gameList.filter((game, index) => game._id !== id))
    }

    //When the DeleteButton component (which renders as a single button) is activated, our axios.delete will run.
    //What happens upon a successful promise result (resolution), depends on which component is current rendering.
    //If the AllGames component is rendering, then we need to have our state update immediately, using the filter method.
    //However, if OneGame is rendering, we do not need to mess with state here at all. In fact, we will get an error if we attempt to use our setter since it was not passed via props from the OneGame component.
    //So we create a conditional that says if the gameList exists (i.e. was is sent via props), then we will run the filter method. ELSE we will just navigate back to AllGames, which will trigger a re-render, triggering our useEffect which will update our gameList to display the most recent changes!

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/games/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //if working with callback:
                    //callbackFunction()

                if(gameList){ //if AllGame.js is the parent component, we need to filter and handle state immediately
                    deleteFilter(id)
                }
                else{ // If oneGame is the parent, we simply need to navigate home
                    navigate("/")
                }
            })
            .catch((err) => console.log(err))

    }



    return(
        <button onClick={deleteHandler}>Delete</button>
    )
}

export default DeleteButton;