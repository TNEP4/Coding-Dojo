import './App.css';
import NewGame from './components/NewGame';
import AllGames from './components/AllGames';
import OneGame from './components/OneGame';
import EditGame from './components/EditGame';
import {Router} from '@reach/router';


function App() {

  return (
    <div className="App">
      {/* We must set up our component's paths 
      inside of the Router component from @reach/router  */}
      <Router>
        <AllGames path="/" />
        <NewGame path="/new" />
      {/* This reach/router id param will be used and sent as a 
      req.param in our request to the server! */}
        <OneGame path="/game/:id" />
        <EditGame path="/game/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
