import React from 'react';


export default function Circle(props) {
    return (
        <div>
            <img style={{ width: '3rem', height: '3rem' }} src={props.image} className="Images rounded-circle" alt="..." />
            <p className='CircleText'>{props.text}</p>
            <p className='CircleNumber'>{props.number}</p>
        </div>

    )


}