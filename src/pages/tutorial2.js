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
          
            <t1>What is a stock chart?
            <br />
            Let's take a look at a typical stock chart below:
            <br />
            The series of letters after the name of the company is the ticker symbol, which identifies the company on the stock exchange. 
            <br / > 
            How to read a stock chart (in 4 steps)
            <br />
            Step 1: identify the trend line
            <br />
            Use your trend line as a first-glance, high-level indicator of something to look into.
            <br />
            Step 2: Look for lines of support and resistance
            <br />
            These are levels at which stock stays within over a given period of time. 
            <br />
            Knowing the lines of resistance can help you decide when to buy or sell a stock. However, it is subjective. 
            <br /> 
            Step 3: Know when divideends and stock splits occur
            <br />
            A dividend is when the company (the board of directors) decides to give a portion of its earnings back to its shareholders. 
            <br />
            A stock split is a strategic move done by the company’s board of directors to issue more shares of stock to the public.
            <br />
            Step 4: Understanding historic trading volumes
            <br />
            With high volumes comes greater ease when buying or selling. If a lot of people are trading the stock that day, you should be able to buy or sell it quickly.
            <br /><br />
            </t1>
            <Link to ="/FAQ"><input type="button" value="previous page" /></Link>
            
            </div> 
            </div>
        </div>
    )
}
