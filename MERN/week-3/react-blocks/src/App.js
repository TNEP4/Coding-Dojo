import React from 'react';
import './App.css';

import Advertisement from './advertisement';
import Subcontent from './subcontents';
import Header from './header';
import Navigation from './navigation';
import Main from './main';
import Nav from './components/nav';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='row'>
        <Navigation />
        <Main />
      </div>
    </div>
  );
}
                
export default App;