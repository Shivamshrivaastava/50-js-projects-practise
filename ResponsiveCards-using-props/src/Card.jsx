import React from 'react'

function Card(props) {
  return (
    <div className="container">
        <div className="card">
            <div className="cardImage">
                <img src={props.img} alt='' />
            </div>
            <div className="cardContent">
                <h2 className="cardTitle">{props.title}</h2>
                <p className="cardDescription">{props.description}</p>
                <button className="cardBtn">Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Card
