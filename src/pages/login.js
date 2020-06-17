import React, {Fragment, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import { toast } from "react-toastify";

const Login = ({setAuth}) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/auth/login",
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
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

    return (
        <div className="login">
            <div className="loginHero">
            
                <h2 style={{textAlign:"center"}}>Log In</h2>
                <form onSubmit={onSubmitForm}>
                <div className="form-fields">Username : <input type="email" name="email" value={email} onChange={e=>onChange(e)}/> </div>
                <div className="form-fields">Password :<input type="password" name="password" value ={password} onChange={e=>onChange(e)}/></div>
                <button>Log In</button>
                </form>
                Don't have an account? Register <Link to="/signup">here</Link>.
            </div>
            
        </div>
    )
}

export default Login;
