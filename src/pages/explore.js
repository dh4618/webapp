import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import ExploreCard from "../components/ExploreCard";
import Flexbox from 'flexbox-react';

const explore = () => {
    return (
      <div className="explorepage">
      <Hero hero="exploreHero">
        <Banner title="Explore.."/>
      </Hero>
      <Flexbox className="company-cards-container">
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        
        <ExploreCard image="ae.png" companyName="American Eagle Outfitter" sector="clothings" subindustry="whatever"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
        <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
      </Flexbox>
      </div>
    )
}

export default explore;
