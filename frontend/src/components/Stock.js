import React, { Component } from 'react'
import Plot from 'react-plotly.js';
import Tips from "./Tips"

 
class Stock extends Component {
    constructor(props) {
        super(props)
        this.state ={
            stockChartXValues: [],
            stockChartYValues: [],
            mostRecentPrice_Open: 0,
            mostRecentPrice_Close: 0,
            mostRecentPrice_Low: 0,
            mostRecentPrice_High: 0,
            };     
    
       
        }

    componentDidMount() {
        this.fetchStock();
           
    }

   //Retreiving data to draw the graph
    fetchStock() {
        const pointerToThis = this;
        const API_KEY =  'LZ13IXMNT9YSEF06';
        const symbol = this.props.company.symbol;
        console.log(this.state.symbol)
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        let temp_mostRecentPrice_Close = [];
        let temp_mostRecentPrice_High = [];
        let temp_mostRecentPrice_Low = [];
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
                        [key]['1. open']);
                        temp_mostRecentPrice_High.push(data['Time Series (Daily)']
                        [key]['2. high']);
                        temp_mostRecentPrice_Low.push(data['Time Series (Daily)']
                        [key]['3. close']);
                        temp_mostRecentPrice_Close.push(data['Time Series (Daily)']
                        [key]['4. close'])
                    }
                
                   pointerToThis.setState({
                  
                       stockChartXValues: stockChartXValuesFunction,
                       stockChartYValues: stockChartYValuesFunction,
                       mostRecentPrice_Open: stockChartYValuesFunction[0],
                       mostRecentPrice_High: temp_mostRecentPrice_High[0],
                       mostRecentPrice_Low: temp_mostRecentPrice_Low[0],
                       mostRecentPrice_Close: temp_mostRecentPrice_Close[0]
                       
                   })

                }
            )
    }
    render() {
        return (
            <>
              
              <Plot
             data={[
                {
                x: this.state.stockChartXValues,
                y: this.state.stockChartYValues,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'green'},
             }
             ]}
        layout={ {width: 1000, height: 500 } }
      />
      <div className="stock-recent-price">
        <h5>Updated:</h5>
          
        <p>
              <Tips explanation="The opening price is the 
            price at which a security first trades upon 
            the opening of an exchange on a trading day; 
            for example, the New York Stock Exchange (NYSE) 
            opens at precisely 9:30 a.m. Eastern time. The 
            price of the first trade for any listed stock 
            is its daily opening price."/>
            Open: ${this.state.mostRecentPrice_Open}
        </p>

        <p> 
            <Tips explanation="Closing price generally refers to the 
            last price at which a stock trades during a regular trading 
            session. For many U.S. markets, regular trading sessions run 
            from 9:30 a.m. to 4:00 p.m. Eastern Time."/>
            Close: ${this.state.mostRecentPrice_Close}
        </p>

        <p>
        <Tips word="Open" explanation="The opening price is the 
            price at which a security first trades upon 
            the opening of an exchange on a trading day; 
            for example, the New York Stock Exchange (NYSE) 
            opens at precisely 9:30 a.m. Eastern time. The 
            price of the first trade for any listed stock 
            is its daily opening price."/>
            High: ${this.state.mostRecentPrice_High} 
        </p>
      </div>
        </>
        )

        
    }
}

export default Stock;
