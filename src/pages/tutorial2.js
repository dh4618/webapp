import React from 'react'
import {Link} from 'react-router-dom'

export default function tutorial2() {
    return (
        <div className="tutorial2">
            <div className="tutorial2Hero">
            <br /> <br/>
            <div className = "tab">
            <br />
            <h2>Tutorial 2: How to read a stock chart?</h2>
          
            <t1>Let's start with what investment actually is and why you should start investing NOW!
            <br />
            Investment involves steaking money with a company, government etc. in order to earn money on this money.
            <br />
            Investment can help with early retirement and quality of life.
            <br / >
            Risk is a valid worry when investing. Some investments are more riskier than others and there is usually a way to estimate the riskiness beforehand.
            <br />
            Types of Investments: Stocks, Bonds, Commodities, ETFs, Real Estate, Currency etc.
            <br />
            Stock markets are where investments are bought and sold.
            <br />
            Compounding causes your investment to grow exponentially over time, thus it is critical to invest even small sums as early as you can in life.
            <br />
            Trading is a risky form of short-term investment.
            <br />
            Inflation is 2.5% a year, money reduces value on average 2.5% a year and thus if you leave money in an account rather than investing it, it is worth 2.5 less each year.
            <br /> 
            Diversification means investing in different geographies, industries and asset classes.
            <br /><br />
            <Link to ="/FAQ"><input type="button" value="previous page" /></Link> 
            <Link to ="/tutorial2"><input type="button" value="next page" /></Link>
            </t1>
            </div> 
            </div>
        </div>
    )
}
