import React, { useState } from 'react';

const Form = (props) => {

    const { boxColorArray, setBoxColorArray } = props;
    const [color, setColor] = useState("");

    const submitHandler = (event) => {

        event.preventDefault();
        console.log(color);
        setBoxColorArray([ ...boxColorArray, color]);
    }

    return(
        <div className="form">
            <form onSubmit= {submitHandler}>
                {/*  First Name */}
                <div className="boxGenInput">
                        <label className="spacerLeft">Color </label> 
                        <input className="colour" type="text" onChange={ (e) => setColor(e.target.value) } placeholder="Type colour code"/>
                        <input className="spacerRight" id="button" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};
    
export default Form;
