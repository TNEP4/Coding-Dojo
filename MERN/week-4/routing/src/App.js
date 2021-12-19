import './App.css';

import { Router, Link } from '@reach/router';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';
import HomeComponent from './components/homeComponent';
import Word from './components/Word';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <div>
        <li>
          <Link to = "/">Home</Link>  
        </li>
        <li>
          <Link to = "/login">Login</Link>
        </li>
        <li>
          <Link to = "/dashboard">Dashboard</Link>
        </li>
      </div>
        
      <Router>
        <HomeComponent path = "/"/>
        <LoginComponent path="/login" />
        <DashboardComponent path="/dashboard" />
        <Word path="/:id/" />
        <Color path="/:id/:fontColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
