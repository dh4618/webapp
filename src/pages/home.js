import React from "react";
import MainPageCard from "../components/MainPageCard"
import Service from "../components/Service"
import FeaturedCompany from "../components/FeaturedCompany"

export default function home( {isAuthenticated} ) {
    return (
      <>
      <div className="home">
     
      <MainPageCard isAuthenticated={isAuthenticated}/>
    
      </div>
       <Service/>
       <FeaturedCompany/>
      
      </>  
    
    );
  };
  

