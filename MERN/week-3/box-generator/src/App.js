import './App.css';
import React, {useState} from 'react';
import Form from './form';
import Display from './display';

function App() {
const [ boxColorArray, setBoxColorArray ] = useState([]);

  return (
    <div className="App">
      <br />
      <h1>Standard Box Generator</h1>
      <br />
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray }/>
      <br />
      <Display boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray} />
    </div>
  );
}

export default App;
