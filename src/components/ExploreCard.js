import React, { Component } from 'react'


export default class ExploreCard extends Component {

    render() {
      
    
        return (
            <div className="company-card">
             <div className ="img-container" ><img src={ this.props.company.images[0]} alt="single company"/></div>
             <div className ="company-card-info">

             <h3>{this.props.company.name}</h3>
             <p>Stock Symbol: {this.props.company.symbol}</p>

             <p>Current Price:{this.props.price}</p>
    
             <p>#{this.props.company.sector}</p>
             <p>#{this.props.company.subindustry}</p>
             </div>

            
             <div className="addto-wishlist">
             Add to Wish List
             </div>
         </div>
        )
    }
}





