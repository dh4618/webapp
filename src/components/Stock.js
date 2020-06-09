import React, { Component } from 'react'

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state ={
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const API_KEY =  'LZ13IXMNT9YSEF06';
        const symbol = 'AMZN';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
        
        fetch(API_CALL)
            .then(
                function(response){
                    return response.json()
                }
            )
            .then(
                function(data) {
                    console.log(data)
                }
            )
    }
    render() {
        return (
            <div>
                Hello from Stock chart
            </div>
        )
    }
}

export default Stock;
