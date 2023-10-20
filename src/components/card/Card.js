import React from 'react'
import "./card.css";

function Card({ header, classname }) {
    return (
        <div className='cardContainer shadow card p-2 d-flex flex-column align-items-center col col-lg-3 col-md-5 col-sm-10 ' >
            <i style={{ fontSize: "100px" }} className={`${classname}`}></i>
            <h2>{header}</h2>
        </div>
    )
}

export default Card