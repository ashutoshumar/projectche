import React  from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from 'react'
const Navbar = (props) => {
    const [showMoblieIcons,setMobileIcons]=useState(false)
    return (
        <>
         <nav className="main-nav">
          <div className="logo">
              <h2>
                  <span>C</span>he
                  <span>A</span>shu
              </h2>
          </div>
          <div className={showMoblieIcons?"menu-link mobile-menu-link":"menu-link"}>
              <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/rooms">About</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
              <li>
              <Link to="/services">Services</Link>
              </li>
              </ul>
            
          </div>
          <div className="hamburger-menu">
              <Link to="/" onClick={()=>{
                  return setMobileIcons(!showMoblieIcons)
              }}>
              <GiHamburgerMenu/>
              </Link>
                  
              
              </div>
         </nav>
         
        </>
    )
}

export default Navbar
