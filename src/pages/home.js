import React from "react";
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'

export default function home() {
    return (
      <Hero> 
        <Banner title="Welcome to Paskala" subtitle="Build a Future as you Browse.">
          <Link to="/signup" className="btn-primary">Sign In</Link>
        </Banner>
      </Hero>
    
    );
  };
  

