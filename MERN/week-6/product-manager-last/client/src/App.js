import './App.css';
import PersonForm from './components/PersonForm';
import OneProduct from './components/OneProduct';
import AllProduct from './components/AllProduct';
import EditProduct from './components/EditProduct';
import Main from './view/main';

import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <OneProduct path="/products/:id" />
        <EditProduct path="/products/edit/:id/" />
      </Router>
    </div>
  );
}

export default App;
