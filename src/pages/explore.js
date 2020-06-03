import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import ExploreCard from "../components/ExploreCard"

const explore = () => {
    return (
      <>
       <Hero hero="exploreHero">
         <Banner title="Explore.."/>
       </Hero>
       <ExploreCard companyName="Facebook" sector="social" subindustry="communication"/>
      </>
    )
}

export default explore;
