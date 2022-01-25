import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import Header from './Header';
import  DeleteButton  from './DeleteButton';


const AllGames = (props) =>{


    const [gameList, setGameList] = useState([]);

    useEffect(()=>{
        //Our simple request to get all games! "/api/games" in our routes!
        axios.get("http://localhost:8000/api/games")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGameList(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    } , [])

    // const deleteGame = (idFromBelow)=>{
    //     // axios.delete(`http://localhost:8000/api/games/${idFromBelow}`)
    //     //     .then((res)=>{
    //     //         console.log(res);
    //     //         console.log(res.data);
    //     setGameList(gameList.filter((game, index)=>game._id !== idFromBelow))
    //         // })
    //         // .catch((err)=>console.log(err))
    //     //react we must handle the front end
    // }

    return(
        <div style={{textAlign:"center"}}>
            <Header 
            link={"/new"}
            linkText={"Add a new game"}
            titleText={"GameMon"}
            />

            {
                gameList.map((game, index)=>(
                    <div key={index}>
                        {/* Without back-ticks example: */}
                        {/* <Link to={"/game/" + game._id}> */}
                        {/* This reach/router id param (as set up in our App.js Router) will 
                        be used and sent as a param in our request to the server! */}
                        <Link to={`/game/${game._id}`}>
                            <p>{game.name}</p>
                            <img src={game.image} alt="Game picture" 
                            style={{width:"150px", height:"150px"}} />
                        </Link>

                        <div>
                            <Link to={`/game/edit/${game._id}`}>Edit</Link>
                            {/* If working with a callback:
                            callbackFunction ={()=>deleteGame(game._id)} */}
                            <DeleteButton 
                            id={game._id}
                            gameList={gameList}
                            setGameList={setGameList}
                            />

                        </div>

                    </div>
                ))
            }
        </div>
    )
}


export default AllGames;