import React, { Component } from 'react'


export default class ExploreCard extends Component {

    render() {
      console.log(this.props.company)
    
        return (
            <div className={this.props.increasing?"company-card-increasing": "company-card-decreasing" }>



            
             <div className ="company-card-info">

             <div className ="img-container" ><img src={ this.props.company.images[0]} alt="single company"/></div>

             <div className="company-card-detail">
             <h3>{this.props.company.name}</h3>
             <p>Stock Symbol: {this.props.company.symbol}</p>
         
             <p>Current Price:{this.props.price}</p>
             <br/>
             <p>#{this.props.company.sector}</p>
             <p>#{this.props.company.subindustry}</p>

             </div>

             <div className="add-to-wishlist">
             Add to Wish List
             </div>
             </div>

            
           
         </div>
        )
    }
}