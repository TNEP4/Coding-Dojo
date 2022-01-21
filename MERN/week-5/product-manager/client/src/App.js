import './App.css';
import PersonForm from './components/PersonForm';
import OneProduct from './components/OneProduct';
import AllProduct from './components/AllProduct';

import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <AllProduct path="/" />
        <PersonForm path="/new" />
        <OneProduct path="/products/:id" />
      </Router>
    </div>
  );
}

export default App;
