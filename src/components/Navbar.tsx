import React from 'react'
import logo from "../assets/logo.png"
import shape4 from "../assets/shape4.png"
import "../styles/Navbar.css"
import {HiOutlineUserAdd} from "react-icons/hi"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <img src={shape4} className='shape4' alt="shape4" />
        <div className='logo'>
          <img src={logo} alt={"logo"} />
          <h2>Enhance AI</h2>
        </div>
        <div className='nav-items-container'>
          <ul className='nav-items'>
            <li className='nav-item active'>
              <a href='#'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='#'>Features</a>
            </li>
            <li className='nav-item'>
              <a href='#'>Pricing</a>
            </li>
            <li className='nav-item'>
              <a href='#'>Contact</a>
            </li>
            <li className='nav-item'>
              <a href='#'>Login</a>
            </li>
          </ul>
          <a href='#' className='sign-up'>
            <HiOutlineUserAdd />
            Free Signup
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar