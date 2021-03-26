import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavMenuItem } from '../Data/NavMenuItem'
import './Navbar.css'


function Navbar() {
    const [sideMenu, setSideMenu] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const toggleSideMenu = () => setSideMenu(!sideMenu)
    const closeSideMenu = () => setSideMenu(false)

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY > 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div>
            <nav className={`navbar ${navbar ? 'navbar active' : 'navbar'} `}>
                <div className='navbar-container'>
                    <Link className={`home-logo ${sideMenu ? "logo-active" : ""} `} to='/' onClick={closeSideMenu}> <img src='/images/flavos-putih.png' width="100%" /> </Link>
                </div>

                <ul className={sideMenu ? "active" : ""}>
                    <li className='blank'></li>
                    {NavMenuItem.map((item, index) => {
                        return (
                            <li className='nav-items'><Link className={item.cName} to={item.url} onClick={closeSideMenu}>
                                <div className="nav-text">{item.title}</div>
                            </Link></li>
                        )
                    })}
                </ul>

                <div className={sideMenu ? "menu-toggle open" : "menu-toggle"} onClick={() => toggleSideMenu()}>
                    <div className='hamburger'></div>
                </div>
                {/* <Button onClick={() => sMenuToggle()}>{sideMenu ? '-' : '+'}</Button> */}

            </nav >
        </div>
    )
}

export default Navbar