import React, { useState } from 'react';

function Togglecolor() {
    const [isBackgroundRed, setIsBackgroundRed] = useState(false);

    const toggleBackgroundColor = () => {
        setIsBackgroundRed(!isBackgroundRed);
    };

    const divStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: isBackgroundRed ? 'red' : 'blue',
        cursor: 'pointer',
        color:'white',
        userSelect:'none',
    };

    return (
        <div style={divStyle} onClick={toggleBackgroundColor}>
            Click me to toggle background color
        </div>
    );
}

export default Togglecolor;
