import React from 'react'

export default function Amount(props) {
    return (
        <div className={props.type === 'in' ? "bggreen" : props.type === 'out' ? "bgred" : "bgblack"}>
            <h1>{props.title}</h1>
            <h1 >{props.type === 'in' ? "+" : props.type === 'out' ? "-" : ""}{props.amount}DH</h1>
        </div>
    )
}
