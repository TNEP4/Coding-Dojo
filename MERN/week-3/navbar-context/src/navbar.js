import React, { useContext } from 'react';

const Navbar = (props) =>{
const userName = props;
    return(
      <div>
        {props.userName}
      </div>
    )
}
export default Navbar;