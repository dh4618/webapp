import React, { Component } from 'react'
import {Link} from "react-router-dom"
import ExploreCard from "../components/ExploreCard";
import Flexbox from 'flexbox-react';


class ExploreContainer extends Component {
    render() {
        return (
        <Flexbox className="company-cards-container">
          <Link to="/company">
          <ExploreCard image="facebook.png" companyName="Facebook" sector="social" subindustry="communication"/>
          </Link>
       
        
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
        )
    }
}

export default ExploreContainer;


