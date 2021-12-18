import React from 'react';
import './App.css';

import Subcontent from './subcontents';
import Advertisement from './advertisement';

                
const Main = (props) => {
  return (
    <div className="main">
        <div className='row'>
            <Subcontent />
            <Subcontent />
            <Subcontent />
        </div>
        <Advertisement />
    </div>
  );
}
                
export default Main;