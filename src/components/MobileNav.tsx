import React, {useState} from 'react'
import logo from "../assets/logo.png"
import shape4 from "../assets/shape4.png"
import shape3 from "../assets/shape3.png"
import "../styles/MobileNav.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { HiOutlineUserAdd } from 'react-icons/hi'

const MobileNav = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false)

  return (
    <>
      <div className='mobile-navbar-container'>
        <div className='logo'>
          <img src={logo} alt={"logo"} />
          <h2>Enhance AI</h2>
        </div>
        <div className='hamburger-container' onClick={() => setSideNavOpen(!sideNavOpen)}>
          <GiHamburgerMenu />
        </div>
      </div>
      <div className='sidenav' style={{right: sideNavOpen ? "0px" : "-350px"}}>
        <a href="#" className='active'>Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Login</a>
        <a href='#' className='sign-up'>
          <HiOutlineUserAdd />
          Free Signup
        </a>
      </div>
      {sideNavOpen &&
        <div className='backdrop-layout' onClick={() => setSideNavOpen(false)}></div>
      }
    </>
  )
}

export default MobileNav