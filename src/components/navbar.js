import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineBars} from 'react-icons/ai'

class NavBar extends Component {
    state={
        isOpen:false
    }

    handleToggle =() => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className ="navbar">
                <div className ="nav-center">
                <div className ="nav-header">
                <div className ="nav-logo">
                <Link to="/explore" className="nav-logo">Paskala</Link>
                </div>
                
                <button type="button"
              className="nav-btn"
              onClick={this.handleToggle}>
                    <AiOutlineBars className="nav-icon"/>    
                </button>

                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} onClick={this.handleToggle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/FAQ">Learning</Link></li>
                    <li><Link to="/discussion">Discussion</Link></li>
                    <li><Link to="/profile">My Profile</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;
