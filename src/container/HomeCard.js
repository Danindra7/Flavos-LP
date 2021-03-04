import React from 'react'
import CardItem from '../components/CardItem'
import './HomeCard.css'
import '../components/CardItem.css'
import { HomeCardDatas } from "../Data/HomeCardDatas"

function HomeCard() {
    return (
        <div className="home-card">
            <h2 className="home-card-title"> Check Out These Epic Destinations </h2>
            <ul className="card-list">
                {HomeCardDatas.map((data) => {
                    return (
                        <CardItem title={data.title} src={data.src} text={data.text} path={data.path} />
                    )
                })}
            </ul>
        </div>
    )
}

export default HomeCard
