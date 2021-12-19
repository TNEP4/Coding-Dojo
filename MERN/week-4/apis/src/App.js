import './App.css';

import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

    const [pokemon, setpokemon] = useState({});
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=807`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setpokemon(res.data);
        setFetched(true);
      })
      .catch((err) => {
        console.log(err);
      })
    }, [fetched]);

  return (
    <div className='App'>
        <h1>Fetch Pokemon</h1>
        <br />
        {
          fetched ?
          pokemon.results.map((pokemon, index) => {
            return (
                  <li key={index} style={{textTransform:"capitalize"}}>{pokemon.name}</li>
            )
          })
          :null
        }
        
    </div>
  );
}

export default App;
