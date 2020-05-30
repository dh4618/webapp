import React from 'react'
import './style.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            Home
            Explore
            About Us
            Log In/Sign Up
        </nav>
        <div>
        social Media links
    </div>
    </header>

   )
 }

export default Header