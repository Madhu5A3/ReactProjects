import React from 'react';

const Contact = (props) => {
    // console.log(props)
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)
    return (
        <div className="container">
            <p className="center">Welcome to Contact Page!!!</p>
        </div>
    )
}

export default Contact