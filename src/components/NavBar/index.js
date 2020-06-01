import React from 'react'
import DrawerToggleButton from '../Sidedrawer/drawerToggleButton'
import './style.css'

/**
* @author
* @function NavBar
**/

const NavBar = (props) => (

  <header className="navbar">
    
    <nav className="navbar_navigation">
    <div><DrawerToggleButton/></div>
      <div className="navbar_logo"><a href="/">Paskala</a></div>
      <div className="spacer"></div>
      <div className="navbar_items">
        <ul>
            <li><a href="/">Log In</a></li>
            <li><a href="/">Explore</a></li>
            <li><a href="/">Learning</a></li>
            <li><a href="/">About Us</a></li>
        </ul>
      </div>
      
    </nav>
   
  </header>
);
  

export default NavBar