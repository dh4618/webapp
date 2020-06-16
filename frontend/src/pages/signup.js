import React from 'react'
import {Link} from 'react-router-dom'

export default function signup() {
    return (
        <div className="signup">
            <div className = "signupHero">
            <br /> <br/>
            <div className = "tab">
            <br />
            <h1>Register</h1>
            <br />
            <h3>Your details</h3>
            First name *<br />
            <div className="reg-form-fields"><input type="text" name="firstname" /> </div>
            Last name *
            <div className="reg-form-fields"><input type="text" name="lastname"/> </div>
            Sex *<br />
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>&emsp;&emsp;&emsp;&emsp;
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>&emsp;&emsp;&emsp;&emsp;
            <input type="radio" id="other" name="gender" value="other" />
            <label for="other">Other</label><br />
            Address *<br />
            <div className="reg-form-fields"><input type="text" name="addr" placeholder="Street"/></div>
            <div className="reg-form-fields"><input type="text" name="addr2" placeholder="Street (Optional)"/></div>
            <div className="reg-form-fields"><input type="text" name="city" placeholder="City" /></div>
            <div className="reg-form-shorter-fields"><input type="text" name="postcode" placeholder="Post code" /></div>
            Date of birth *<br />
            <div/>
            <div className="reg-form-shorter-fields"><input type="date" name="DOB" /> </div>
            Email *<br />
            <div className="reg-form-fields"><input type="text" name="email"/></div>
            Phone number<br />
            <div className="reg-form-fields"><input type="text" name="phoneno"/></div>
            License number<br />
            <div className="reg-form-fields"><input type="text" name="licenseno"/></div>
            Password *<br />
            <div className="reg-form-fields"><input type="password" name="password"/></div>
            Confirm password *<br />
            <div className="reg-form-fields"><input type="password" name="confirmedpassword"/></div>

            </div>
            
            <br />
            <Link to="/explore"><input type="button" value="Create Account" /></Link>
            </div>
        </div>
    )
}
