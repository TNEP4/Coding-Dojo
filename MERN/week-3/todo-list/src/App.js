import React, { useState } from 'react';
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState('');

  return (
    <div className="App">
      <header className="">
        <h1>To Do List</h1>
      </header>
    </div>
  );
}

export default App;
