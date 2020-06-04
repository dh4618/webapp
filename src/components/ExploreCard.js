import React, { Component } from 'react'

class ExploreCard extends Component {
    render() {
        var {image,companyName,sector,subindustry} = this.props;
        return (
            <div className="company-card">
            <div ><img src={require('../assets/images/'+ image)} alt="company logo" className="company-logo"/></div>
            <p>{companyName}</p>
            <p>#{sector}</p>
            <p>#{subindustry}</p>
            <div className="addto-wishlist">
                Add to Wish List
            </div>
            </div>
        )
    }
}

export default ExploreCard;


