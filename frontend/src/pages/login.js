import React from 'react'
import {Link} from 'react-router-dom'

export default function login() {
    return (
        <div className="login">
            <div className="loginHero">
            
                <h2 style={{textAlign:"center"}}>Log In</h2>
                <div className="form-fields">Username : <input type="text" name="username"/> </div>
                <div className="form-fields">Password :<input type="password" name="password" /></div>
                <Link to="/explore"><input type="button" value="Log In" /></Link>
            </div>
            
        </div>
    )
}
