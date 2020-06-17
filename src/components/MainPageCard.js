import React from 'react'
import Logo from './Logo/index.js'
import {Link} from "react-router-dom"

function UserGreeting(props) {
  return <><div className="centralise"><h3>Welcome back!</h3></div></>;
}

function GuestGreeting(props) {
  return <><Link to="/signup" className="btn-primary">Sign Up</Link>
         <Link to="/login" className="btn-primary">Log In</Link></>
}

function Greeting(props) {
  const isAuthenticated = props.isAuthenticated;
  if(isAuthenticated) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const MainPageCard = ({isAuthenticated} ) => {
    return (
        <div className="home_container">
            <div className="welcome"> Welcome to </div>
            <Logo/>
            <hr/>
            <div className="slogan"> Build a Future as you Browse. </div>
            <Greeting isAuthenticated={isAuthenticated} />
        </div>
    
       
    )
}

export default MainPageCard
