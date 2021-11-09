import React from 'react'
import "./card-list.style.css"
import Card from "../Card/card.component"
export default function CardList(props) {
    return (
        <div className="card-list">
            {props.monster.map((item,i)=>{
                return <Card name = {item.name} keyname={i} key={i}/>
            })}
        </div>
    )
}

