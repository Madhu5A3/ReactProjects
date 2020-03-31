import React from 'react';

const randomColour = (WrappedComponent) => {

    const colours = ['red', 'yellow', 'blue', 'orange'];
    const randomcolour = colours[Math.floor(Math.random() * 3)];
    const className = randomcolour + '-text'

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent />
            </div>
        )
    }
}

export default randomColour