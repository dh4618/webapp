import React from 'react'
import './style.css'

/**
* @author
* @function NavBar
**/

const NavBar = (props) => {
  return(
    <div className="navbar">
        <ul className="navbarmenu">
            <li>Home</li>
            <li>About Us</li>
            <li>Post</li>
            <li>Contact Us</li>
        </ul>

        <div className="search">
            <input type="text" placeholder="Search"/>
            <img src={require('../../assets/icons/search-32.png')} alt="search-32"/>
        </div>

    
    </div>
   )

 }

export default NavBar