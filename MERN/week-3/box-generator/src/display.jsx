import React from 'react';

const Display = (props) => {
    const { boxColorArray } = props;
    console.log(boxColorArray);
    return (
        <div>
            {
                boxColorArray.map((boxColor, index) => (
                    <div key={index} style={{
                        display: 'inline-block',
                        width: '50px',
                        height: '50px',
                        margin: '10px',
                        backgroundColor: boxColor
                    }}
                    >
                    </div>
                ))
            }
        </div>
    );
}

export default Display;