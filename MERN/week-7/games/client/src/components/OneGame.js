import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import  DeleteButton  from './DeleteButton';



const OneGame = (props) =>{

    const {id} = props;
    const [game, setGame] = useState({});


    useEffect(()=>{
        //This id is very important. We were able to send it from AllGames to here 
            //via our Link element. Our Link uses the path that was set in our Router in app.js.
        // It looked like this "/game/:id"
        // The id can be destructured from props. (LOOK AT YOUR DEV TOOLS FOR THIS COMPONENT)
        // We destructure it and use it as our request's params as set in our controller!
        axios.get(`http://localhost:8000/api/games/${id}`)
        // axios.get("http://localhost:8000/api/games/" + id)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGame(res.data);

            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])


    // const deleteGame = () =>{
    //     axios.delete(`http://localhost:8000/api/games/${id}`)
    //         .then((res)=>{
    //             console.log(res);
    //             console.log(res.data);
    //             navigate("/");
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // }


    return(
        <div style={{textAlign:"center"}}>
            <header>
                <h1 style={{fontSize:"50px", borderBottom:"5px double lightgray", 
                marginLeft:"450px", marginRight:"450px"}}>{game.name}</h1>
                <Link to={"/"}>Return Home</Link>
            </header>

            <img src={game.image} alt="game image" 
            style={{width:"150px", height:"150px"}}/>
            <p>{game.genre}</p>
            <p>{game.yearReleased}</p>
            <p>{game.rating}</p>
            <p>{game.company}</p>

            {/* <button onClick={deleteGame}>
                Delete {game.title}
            </button> */}

            {/* You can also pass in a callback function specific to this component
            callbackFunction = {()=>navigate("/")} */}
            <DeleteButton id={game._id}
            />
        </div>
    )
}


export default OneGame;