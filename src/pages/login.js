import React from 'react'

export default function login() {
    return (
        <div className="login">
            <div className="loginHero">
                Log in
                <div> Username: <input type="text" name="username"/> </div>
                <div>Passward:<input type="password" name="password" /></div>
                <div><input type="submit" name="Log in" /></div>
            </div>
            
        </div>
    )
}
