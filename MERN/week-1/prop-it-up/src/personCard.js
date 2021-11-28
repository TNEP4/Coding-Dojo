import React from 'react';
    
const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props; 
    return (
        <div className="personCard">
            <h1>
                { firstName }, { lastName }
            </h1>
            <p> Age: { age } </p>
            <p> Hair Color: { hairColor } </p>
            <br />
        </div>
    );
}
export default PersonCard;