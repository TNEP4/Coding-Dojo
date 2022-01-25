import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';



const Form = (props) => {

    // const [name, setName] = useState("")
    // //our api actually turns this into a number due to its "type" in our schema, 
    //     //so we do not need to specify that here. Pretty convenient!
    // const [yearReleased, setYearReleased] = useState("")
    // const [genre, setGenre] = useState("")
    // const [image, setImage] = useState("")
    // const [rating, setRating] = useState("")
    // const [company, setCompany] = useState("")

    const {game, setGame, submitHandler, errors, buttonText} = props;
  

    const onChangeHandler = (e)=>{

        const newStateObject = {...game};
        newStateObject[e.target.name]  = e.target.value;

        console.log("e.target.name = ", e.target.name)
        console.log("e.target.value = ", e.target.value)

        setGame(newStateObject);
    }



    return (
        <div>
            <form onSubmit={submitHandler}>

                <div>
                    <label>Name</label>
                    <input value={game.name} name="name" onChange={(e) => onChangeHandler(e)} type="text" />

                    {/* We will access the message itself in this way. 
                    If an error for the name exists then we will display it's error message
                    else we'll display nothing (w/o null you'll get an error)*/}
                    {
                        errors.name ?
                            <span>{errors.name.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label>Year Released</label>
                    <input value={game.yearReleased} name="yearReleased" onChange={onChangeHandler} type="number" />
                    {
                        errors.yearReleased ?
                            <span>{errors.yearReleased.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label>Genre</label>
                    <select value={game.genre} onChange={onChangeHandler} name="genre">
                        <option value="none" defaultValue hidden>Select a Genre</option>
                        <option value="Action">Action</option>
                        <option value="Platformer">Platformer</option>
                        <option value="Survival">Survival</option>
                        <option value="RPG">RPG</option>
                        <option value="FPS">FPS</option>
                        <option value="RTS">RTS</option>
                        <option value="MMO">MMO</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Sports">Sports</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Children's">Children's</option>
                    </select>

                    {
                        errors.genre ?
                            <span>{errors.genre.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label>Image</label>
                    <input value={game.image} name="image" onChange={onChangeHandler} type="text" />

                    {
                        errors.image ?
                            <span>{errors.image.message}</span>
                            : null
                    }
                </div>

                <div>
                    <label>Rating</label>
                    <select value={game.rating} onChange={onChangeHandler} name="rating">
                        <option value="none" defaultValue hidden>Select a Rating</option>
                        <option value="T">T</option>
                        <option value="E">E</option>
                        <option value="MA">MA</option>
                        <option value="AO">AO</option>
                        <option value="E10">E10</option>
                        <option value="Y">Y</option>
                        <option value="No Rating">No Rating</option>
                    </select>
                    {
                        errors.rating ?
                            <span>{errors.rating.message}</span>
                            : null
                    }

                </div>

                <div>
                    <label>Company</label>
                    <input value={game.company} name="company" onChange={onChangeHandler} type="text" />

                    {
                        errors.company ?
                            <span>{errors.company.message}</span>
                            : null
                    }
                </div>

                <button>{buttonText}</button>


            </form>

        </div>
    )
}


export default Form;