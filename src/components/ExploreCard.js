import React, { Component } from 'react'


export default function ExploreCard({company}) {
    const{name,symbol,images,subindustry,sector} = company;
    var {price} = company;
    
    const API_KEY =  'LZ13IXMNT9YSEF06';
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
    let temp_mostRecentPrice_Open = [];

    fetch(API_CALL)
            .then(
                function(response){
                    return response.json()
                }
            )
            .then(
                function(data) {
                    console.log(data);
                    for(var key in data['Time Series (Daily)']) {
                        temp_mostRecentPrice_Open.push(data['Time Series (Daily)']
                        [key]['1. open'])
                    }
                    console.log(temp_mostRecentPrice_Open.length)
                }
            
                
            )
       
    return (
        <div className="company-card">
            <div className ="img-container" ><img src={images[0]} alt="single company"/></div>
            <div className ="company-card-info">

                
    
            <p>{name}</p>
            <p>{symbol}</p>

            <p>{price}</p>
    
            <p>#{sector}</p>
            <p>#{subindustry}</p>
            </div>

            
            <div className="addto-wishlist">
            Add to Wish List
            </div>
        </div>
    )
}




