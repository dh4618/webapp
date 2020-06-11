import React, { Component } from 'react'


export default class ExploreCard extends Component {

    render() {
        const {name,symbol,sector,subindustry,images} = this.props.company;
    
        return (
            <div className="company-card">
             <div className ="img-container" ><img src={images[0]} alt="single company"/></div>
             <div className ="company-card-info">

             <p>{name}</p>
             <p>{symbol}</p>

             <p>{this.props.price}</p>
    
             <p>#{sector}</p>
             <p>#{subindustry}</p>
             </div>

            
             <div className="addto-wishlist">
             Add to Wish List
             </div>
         </div>
        )
    }
}





