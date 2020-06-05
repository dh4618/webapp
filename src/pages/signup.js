import React from 'react'
import {Link} from 'react-router-dom'

export default function signup() {
    return (
        <div className="signup">
            <div className = "signupHero">
            <br /> <br/>
            <h2>Register</h2>
            <h3>Your details</h3>
            <h6>First name *</h6><br />
            <div className="reg-form-fields"><input type="text" name="firstname"/> </div>
            Last name *
            <div className="reg-form-fields"><input type="text" name="lastname"/> </div>
            Sex *<br />
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>
            <input type="radio" id="other" name="gender" value="other" />
            <label for="other">Other</label>

            <Link to="/explore"><input type="button" value="Create Account" /></Link>
            </div>
        </div>
    )
}
