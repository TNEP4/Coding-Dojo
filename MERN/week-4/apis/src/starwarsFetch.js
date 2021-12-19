import './App.css';

import React, {useEffect, useState} from 'react';

function App() {

    const [planet, setPlanet] = useState({});
    const [planetNumber, setPlanetNumber] = useState(1);

    useEffect(() => {
        fetch(`https://swapi.py4e.com/api/planets/${planetNumber}`)
            .then(res => res.json())
            .then(data => setPlanet(data))
            .catch((err) => console.log(err));
    }, [planetNumber]);

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
        <div style={{textAlign: "left", width:"250px", margin:'auto'}}>
          <p>name: {planet.name}</p>
          <p>climate: {planet.climate}</p>
          <p>population: {planet.population}</p>
          <p>surface_water: {planet.surface_water}</p>
          <br />
          <button style={{marginRight: "20px"}} onClick={planetChangerPrev}>Previous</button>
          <button onClick={planetChangerNext}>Next</button>
          
        </div>
        
    </div>
  );
}

export default App;
