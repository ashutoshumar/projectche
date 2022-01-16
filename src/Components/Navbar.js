import React  from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from 'react'
import firebase from 'firebase/compat/app';
import auth from '../firebase'
const Navbar = (props) => {
    const [showMoblieIcons,setMobileIcons]=useState(false)
   const handleClick=() => {
    const provider=new firebase.auth.GoogleAuthProvider()
   
  const res=auth.signInWithPopup(provider)
   console.log(res)

  // const accessToken=res.credential.accessToken

    }
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
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
              <li>
              <Link to="/services">Servicess</Link>
              </li>
              <li>
              <Link  to="/" onClick={()=>{handleClick()}}>Login</Link>
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
