import React from 'react'
import Logo from './Logo/index.js'
import {Link} from "react-router-dom"

const MainPageCard = () => {
    return (
        <div className="home_container">
            <div className="welcome"> Welcome to </div>
            <Logo/>
            <hr/>
            <div className="slogan"> Build a Future as you Browse. </div>
            <Link to="/signup" className="btn-primary">Sign Up</Link>
            <Link to="/login" className="btn-primary">Log In</Link>
        </div>
    
       
    )
}

export default MainPageCard
