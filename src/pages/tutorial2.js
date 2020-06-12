import React from 'react'
import {Link} from 'react-router-dom'
import img1 from "../assets/images/how-to-read-a-stock-chart.png";
import img2 from "../assets/images/what-is-a-trend-line.png";
import img3 from "../assets/images/line-of-support-line-of-resistance.png";
import img4 from "../assets/images/what-is-a-stock-split.png";
import img5 from "../assets/images/stock-trading-volumes.png";

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
            <img src={img1} style={{maxWidth:800, height:'auto'}}></img>
            <br />
            The series of letters after the name of the company is the ticker symbol, which identifies the company on the stock exchange. 
            <br / > <br />
            How to read a stock chart (in 4 steps)
            <br />
            <bold>Step 1: identify the trend line</bold>
            <br />
            <img src={img2} style={{maxWidth:800, height:'auto'}}></img>
            <br />
            Use your trend line as a first-glance, high-level indicator of something to look into.
            <br /><br />
            <bold>Step 2: Look for lines of support and resistance</bold>
            <br />
            <img src={img3} style={{maxWidth:800, height:'auto'}}></img>
            <br />
            These are levels at which stock stays within over a given period of time. 
            <br />
            Knowing the lines of resistance can help you decide when to buy or sell a stock. However, it is subjective. 
            <br /> <br />
            <bold>Step 3: Know when divideends and stock splits occur</bold>
            <br />
            <img src={img4} style={{maxWidth:800, height:'auto'}}></img>
            <br />
            A dividend is when the company (the board of directors) decides to give a portion of its earnings back to its shareholders. 
            <br />
            A stock split is a strategic move done by the company’s board of directors to issue more shares of stock to the public.
            <br /><br />
            <bold>Step 4: Understanding historic trading volumes</bold>
            <br />
            <img src={img5} style={{maxWidth:800, height:'auto'}}></img>
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
