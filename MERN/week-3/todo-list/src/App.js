import React, { useState } from 'react';
import './App.css';

function App() {

  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    if (newTodo.length == 0) {
      alert("Please enter a todo");
      return;
    }

    const todoItem = {
      text: newTodo,
      completed: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo('');
  }

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, index) => {
      return index !== delIdx;
    });
    setTodos(filteredTodos);
  }

  const handleToggleComplete = (e, index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = e.target.checked;
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <header className="header">
        <h1>To Do List</h1>
        <br />
        <form className='form' 
          onSubmit={(event) => {
            handleNewTodoSubmit(event);
          }}
        >
          <input 
            type="text" placeholder='Type here' className='input' 
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />

          <div>
            <button className='button'>Add</button>
          </div>

        </form>

        <br />
        <div className='todo-list'>
          {todos.map((todo, index) => {
            
            const todoClasses = ["default"];

            if (todo.completed) {
              todoClasses.push('line-through');
            }
            
            return (
              <div key={index}>
                <div style={{display:"flex", alignItems:"center"}}>
                  <input type="checkbox" checked={todo.completed} style={{marginRight:"10px"}}
                  onChange={(e) => {
                    handleToggleComplete(e, index);
                  }}
                  />
                  <p className={todoClasses.join(" ")}>{todo.text}</p>
                  <button className='deleteBtn' onClick={(e) => {
                    handleTodoDelete(index);
                  }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
            })}
      </div>
      </header>
      
    </div>
  );
}

export default App;
