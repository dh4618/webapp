import React from "react";
import MainPageCard from "../components/MainPageCard"
import Service from "../components/Service"
import FeaturedCompany from "../components/FeaturedCompany"
export default function home() {
    return (
      <>
      <div className="home">
     
      <MainPageCard/>
    
      </div>
       <Service/>
       <FeaturedCompany/>
      </>  
    
    );
  };
  

