import React from 'react'

export default function BigCard(props) {
    return (
        <div className='bigCard'>
            <h1>{props.title}</h1>
            <div className='cards'>
                {props.children}
            </div>
        </div>
    )
}
