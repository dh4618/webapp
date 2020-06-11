import React, { Component } from 'react'


export default class ExploreCard extends Component {
        constructor(props) {
            super(props)
            this.state ={
                price:0
            
                };                
            }

            
            componentDidMount() {
                this.fetchPrice();  
            }


            fetchPrice() {
                const pointerToThis = this;
                const API_KEY =  'LZ13IXMNT9YSEF06';
                const symbol = this.props.company.symbol;
                let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
                let temp_price =[]
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
                                temp_price.push(data['Time Series (Daily)']
                                [key]['1. open']);
                            }
                        
                           pointerToThis.setState({
                          
                              price : temp_price[0]
                               
                           })
        
                    
                        }
                    )
            }

    render() {
        return (
            <div className="company-card">
             <div className ="img-container" ><img src={this.props.company.images[0]} alt="single company"/></div>
             <div className ="company-card-info">

             <p>{this.props.company.name}</p>
             <p>{this.props.company.symbol}</p>

             <p>{this.state.price}</p>
    
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


// export default function ExploreCard({company}) {
//     const{name,symbol,images,subindustry,sector} = company;
    

       
//     return (
//         <div className="company-card">
//             <div className ="img-container" ><img src={images[0]} alt="single company"/></div>
//             <div className ="company-card-info">

//             <p>{name}</p>
//             <p>{symbol}</p>

//             <p>{price}</p>
    
//             <p>#{sector}</p>
//             <p>#{subindustry}</p>
//             </div>

            
//             <div className="addto-wishlist">
//             Add to Wish List
//             </div>
//         </div>
//     )
// }




