import './App.css';

import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

    const [planet, setPlanet] = useState({});
    const [planetNumber, setPlanetNumber] = useState(1);
    const [inhabitants, setInhabitants] = useState({});
    const [inhabitantsLink, setInhabitantsLink] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
      axios.get(`https://swapi.py4e.com/api/planets/${planetNumber}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPlanet(res.data);
        setInhabitantsLink(res.data.residents[0]);
      })
      .catch((err) => {
        console.log(err);
      })
    }, [planetNumber]);

    useEffect(() => {
      if(inhabitantsLink){
        axios.get(inhabitantsLink)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setInhabitants(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
      }
      else {
        setInhabitants("");
      }
    }, [inhabitantsLink]);


    const planetChangerNext = () => {
      if (planetNumber === 61){
        setPlanetNumber(1);
      }
      else {
        setPlanetNumber(planetNumber + 1);
      }
    };

    const planetChangerPrev = () => {
      if (planetNumber === 1){
        setPlanetNumber(61);
      }
      else {
        setPlanetNumber(planetNumber - 1);
      }
    };

  return (
    <div className='App'>
        <h1>Star Wars People</h1>
        <br />
        <div style={{textAlign: "left", width:"300px", margin:'auto'}}>
          <p>name: {planet.name}</p>
          <p>climate: {planet.climate}</p>
          <p>population: {planet.population}</p>
          <p>surface_water: {planet.surface_water}</p>
          <br />
          <button style={{marginRight: "10px"}} onClick={planetChangerPrev}>Previous</button>
          <button style={{marginRight: "10px"}} onClick={planetChangerNext}>Next</button>
          <button onClick={() => setToggle(!toggle)}>Famous person
          {
            toggle ? <span> (on)</span> : <span> (off)</span>
          }
          </button>
          <br />
          {
            toggle && inhabitants ?
            <p>Famous person: {inhabitants.name}</p>
            :null
          }
         
          
        </div>
        
    </div>
  );
}

export default App;
