import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from './Form';
import Header from './Header';


const EditGame = (props)=>{

    const {id} = props;

    // const [name, setName] = useState("")
    // //our api actually turns this into a number due to its "type" in our schema, 
    //     //so we do not need to specify that here. Pretty convenient!
    // const [yearReleased, setYearReleased] = useState("")
    // const [genre, setGenre] = useState("")
    // const [image, setImage] = useState("")
    // const [rating, setRating] = useState("")
    // const [company, setCompany] = useState("")

    const [editedGame, setEditedGame] = useState({
        name: "",
        yearReleased: "",
        genre: "",
        image: "",
        rating: "",
        company: ""
    })

    const [errors, setError] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setEditedGame(res.data)
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [])

const editSubmitHandler = (e)=>{
    e.preventDefault();

    axios.put(`http://localhost:8000/api/games/${id}`,
    //request body
editedGame)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors)

        })
}


    return(
        <div>

            <Header
                link={"/"}
                linkText={"Return Home"}
                titleText={"Edit a Game!"}
            />

            <Form 
            game={editedGame}
            setGame={setEditedGame}
            submitHandler={editSubmitHandler}
            errors={errors}
            //button in our Form.js will show different text 
                //depending on which parent component is currently rendering
            buttonText={"Update Game"}

            />
            


        </div>
    )
}


export default EditGame;