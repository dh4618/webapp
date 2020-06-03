import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import Services from "../components/Services"
import MainPageCard from "../components/MainPageCard"

export default function home() {
    return (
      <div className="home">
     
      {/* <Hero> 
        <Banner title="Welcome to Paskala" subtitle="Build a Future as you Browse.">
          <Link to="/signup" className="btn-primary">Sign Up</Link>
          <Link to="/login" className="btn-primary">Log In</Link>
        </Banner>

      </Hero> */}

      <MainPageCard/>
           
      </div>
    
    );
  };
  

