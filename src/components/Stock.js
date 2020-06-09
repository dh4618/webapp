import React, { Component } from 'react'
import Plot from 'react-plotly.js';

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
        const pointerToThis = this;
        const API_KEY =  'LZ13IXMNT9YSEF06';
        const symbol = 'AMZN';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
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
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)']
                        [key]['1. open']
                        );
                    }
                   pointerToThis.setState({
                       stockChartXValues: stockChartXValuesFunction,
                       stockChartYValues: stockChartYValuesFunction
                   })
                }
            )
    }
    render() {
        return (
            <div>
              <Plot
             data={[
                {
            x: this.state.stockChartXValues,
            y: this.state.stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
             }
             ]}
        layout={ {width: 800, height: 500, title: 'Stock'} }
      />
                
            </div>
        )
    }
}

export default Stock;
