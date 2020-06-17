import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import { toast } from "react-toastify";

const Signup = ({setAuth})=> {
    const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
    });

    const { email, password, name } = inputs;

    const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };


    return (
        <div className="signup">
            <div className = "signupHero">
            <br /> <br/>
            <div className = "tab">
            <br />
            <h1>Register</h1>
            <br />
            <form onSubmit={onSubmitForm}>
            <h3>Your details</h3>
            
            First name *<br />
            <div className="reg-form-fields"><input type="text" name="name" value = {name} onChange={e => onChange(e)} /> </div>
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
            
            <div className="reg-form-shorter-fields"><input type="date" name="DOB" /> </div>
            Email *<br />
            <div className="reg-form-fields"><input type="email" name="email" value = {email} onChange={e => onChange(e)}/></div>
            Phone number<br />
            <div className="reg-form-fields"><input type="text" name="phoneno"/></div>
            License number<br />
            <div className="reg-form-fields"><input type="text" name="licenseno"/></div>
            Password *<br />
            <div className="reg-form-fields"><input type="password" name="password" value = {password} onChange={e => onChange(e)}/></div>
            Confirm password *<br />
            <div className="reg-form-fields"><input type="password" name="confirmedpassword"/></div>
           
            <br />
            <button>Create Account</button>
            </form>
            
            </div>
            </div>
           
        </div>
    )
}

export default Signup;
