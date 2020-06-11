import React,  { Component } from "react"
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import ExploreCard from "./ExploreCard"


export default class Company extends Component {
    constructor(props) {
        super(props)
        this.state ={
            price:0
            };    
            
        }

        
        componentDidMount() {
            this.fetchPrice();  
        }

        //obtaining the price for the company
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
        const {slug} = this.props.company;
        console.log("props",this.props.company)
        return (
            <div>
                 <article className="company">
          <Link to={`/explore/${slug}`} >
            <ExploreCard company={this.props.company} price={this.state.price}/>
         </Link>
           
         </article>
            </div>
        )
    }
}

Company.propTypes ={
    comopany:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        sector:PropTypes.string.isRequired,
        subindustry:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}

