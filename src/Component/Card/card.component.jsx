import React from 'react'
import "./card.style.css"
export default function Card(props) {
    return (
        <div className="card-container" >
             <h1 key ={props.keyname}>{props.name}</h1>
        </div>
    )
}
