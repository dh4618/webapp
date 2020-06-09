import React, { Component } from 'react'
import Flexbox from 'flexbox-react';


export default function ExploreCard({company}) {
    const{name,slug,images,subindustry,sector} = company;
    return (
        <div className="company-card">
            <div className ="img-container" ><img src={images[0]} alt="single company"/></div>
            <div className ="company-card-info">
    
            <p>{name}</p>
            <p>#{sector}</p>
            <p>#{subindustry}</p>
            </div>

            
            <div className="addto-wishlist">
            Add to Wish List
            </div>
        </div>
    )
}




