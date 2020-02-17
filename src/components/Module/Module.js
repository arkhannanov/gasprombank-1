import React from 'react';
import './Module.scss';

const Module = (props) => {
    return (
        <div className='molule'>
            <div className="module__title">{props.header}</div>
            <ul className="module__list">
                {props.options.map((item, index) => <li key={index} className="module__list-item">{item}</li>)}
            </ul>
            <p className="module__text">{props.text}</p>
        </div>
    )
}

export default Module;