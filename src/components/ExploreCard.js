import Logo from './Logo/index.js'
import {Link} from "react-router-dom"


import React, { Component } from 'react'

class ExploreCard extends Component {
    render() {
        var {image,companyName,sector,subindustry} = this.props;
        return (
            <div className="company-card">
            <div ><img src={require('../assets/images/'+ image)} className="company-logo"/></div>
            <p>{companyName}</p>
            <p>#{sector}</p>
            <p>#{subindustry}</p>
           
        </div>
        )
    }
}

export default ExploreCard;


