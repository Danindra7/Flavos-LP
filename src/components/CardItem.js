import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'

function CardItem(props) {
    return (
        <div className="card-item">
            <Link className="card-link" to={props.path}>
                <div className="card-image-container">
                    <img className="card-image" src={props.src} alt="gambar tidak tersedia" />
                </div>
                <div className="card-text-container">
                    <h3 className="card-title"> {props.title} </h3>
                    <h5 className="card-text"> {props.text} </h5>
                </div>
            </Link>
        </div>
    )
}

export default CardItem
