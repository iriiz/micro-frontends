import React from 'react';
import './css/style.css';

function Body({ name }) {
    return (
        <div className='content-body'>
            <div>Name: {name} </div>
            <div>Framework: react</div>
            <div>Language: JavaScript</div>
            <div>CSS: Empty CSS</div>
        </div>
    )
}

export default Body
