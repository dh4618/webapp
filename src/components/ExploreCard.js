import React from 'react'
import Logo from './Logo/index.js'
import {Link} from "react-router-dom"

export default function ExploreCard({children,companyName,sector,subindustry}) {
    return (
        <div className="company-container">
            <div className="company-logo">image of facebook </div>
            {companyName}
            {sector}
            {subindustry}
        </div>
    
       
    )
}

