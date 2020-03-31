import React from 'react';
import randomColour from '../hoc/randomColour.js';

const About = () => {
    return (
        <div className="container">
            <p className="center">Welcome to About Page!!!</p>
        </div>
    )
}

export default randomColour(About)