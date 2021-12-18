import './App.css';
import React, { createContext } from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import FormWrapper from './components/FormWrapper';

function App() {

  return (
    <div className="App">
      <Wrapper>
        <NavBar />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}

export default App;
