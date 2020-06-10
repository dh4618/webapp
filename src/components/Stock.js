import React, { Component } from 'react'
import Plot from 'react-plotly.js';
 

class Stock extends Component {
    constructor(props,stockSymbol) {
        super(props)
        this.state ={
            stockChartXValues: [],
            stockChartYValues: [],
            };
        this.stockSymbol = stockSymbol;
        console.log("stocksymbolINSTOCK",this.props)
        }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        
        const pointerToThis = this;
        const API_KEY =  'LZ13IXMNT9YSEF06';
        const symbol = this.props.stockSymbol;
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

        // const {getCompany} = this.context;
        // const company = getCompany(this.state.slug);
        // const {name,
        //     description,
        //     sector,
        //     subindustry,
        //     symbol,
        //     images} = company
        return (
            <div>
                
                <h1>{this.symbol}</h1>
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
