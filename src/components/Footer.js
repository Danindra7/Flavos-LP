import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { x, exploreData, contactData } from "../Data/FooterCategoryList"

function Footer() {
    const [explore, setExplore] = useState(false)
    const [contact, setContact] = useState(false)

    return (
        <div className="footer">
            {/* <div className="footer-category-container"> */}
            <div className="footer-category">
                <h2 className="category-header" onClick={() => setExplore(!explore)} >
                    Explore <span className={`drop-icon ${explore ? "drop-active" : ""} `}><i class="fas fa-caret-down"></i></span>
                </h2>
                <ul className={`link-list ${explore ? "category-active" : ""} `}>
                    {exploreData.map((cData) => {
                        return (
                            <li className="link-item">
                                <Link to={cData.path} className="footer-link">{cData.cName}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="footer-category">
                <h2 className="category-header" onClick={() => setContact(!contact)} >
                    Contact <span className={`drop-icon ${contact ? "drop-active" : ""} `}><i class="fas fa-caret-down"></i></span>
                </h2>
                <ul className={`link-list ${contact ? "category-active" : ""} `}>
                    {contactData.map((cData) => {
                        return (
                            <li className="link-item">
                                <Link to={cData.path} className="footer-link">{cData.cName}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* </div> */}
            <div style={{ marginTop: 20 }}>
                Subscribe Container to be Fix
        </div>
        </div >
    )
}

export default Footer
