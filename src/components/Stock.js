import React, { Component } from 'react'
import Plot from 'react-plotly.js';
 
// "1. open": "133.5200",
//             "2. high": "133.6000",
//             "3. low": "131.0200",
//             "4. close": "131.8700",
//             "5. adjusted close": "131.8700",
//             "6. volume": "5391520",
//             "7. dividend amount": "0.0000",
//             "8. split coefficient": "1.0000"

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
        this.stockSymbol = this.props.stockSymbol;
        }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        const API_KEY =  'LZ13IXMNT9YSEF06';
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
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
          Updated:
          <p>Open: ${this.state.mostRecentPrice_Open}   Close: ${this.state.mostRecentPrice_Close}</p>
          <p>High: ${this.state.mostRecentPrice_High}   Low: ${this.state.mostRecentPrice_Low}</p>
    
        
          
          
          
      </div>
        </>
        )

        
    }
}

export default Stock;
