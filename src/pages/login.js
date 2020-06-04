import React from 'react'

export default function login() {
    return (
        <div className="login">
            <div className="loginHero">
            
                <h2>Log In</h2>
                <div className="form-fields">Username : <input type="text" name="username"/> </div>
                <div className="form-fields">Password :<input type="password" name="password" /></div>
                <div><input type="button" value="Log In" /></div>
            </div>
            
        </div>
    )
}
