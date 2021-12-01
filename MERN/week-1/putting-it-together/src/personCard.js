import React, { useState } from 'react';



const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [ birthday, setBirthday ] = useState(props.age);
    return (
        <div className="personCard">
            <h1>
                { lastName }, { firstName }
            </h1>
            <p> Age: { birthday } </p>
            <p> Hair Color: { hairColor } </p>
            <br />
            <button onClick= { (event) => setBirthday(birthday + 1)}>Birthday Button for { firstName } { lastName } </button>
        </div>
    );
}
export default PersonCard;