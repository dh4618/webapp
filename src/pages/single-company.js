import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {CompanyContext} from "../context" 
import StyledHero from "../components/StyledHero"
import Stock from "../components/Stock"
import Tips from "../components/Tips"

export default class single_company extends Component {
   //Accessing the slug
    constructor(props){
        super(props)
        this.state={
            slug:this.props.match.params.slug
        }
    }

    static contextType = CompanyContext;

    // componentDidMount(){

    // }
    render() {
        const {getCompany} = this.context;
        const company = getCompany(this.state.slug);
        //Error message if the company does not exists
        if(!company) {
            return (<div className="error">
                <h3>No such room could be found</h3>
                <Link to="/explore" className="btn-primary">Back to explore</Link>
            </div>
            );    
        }
        //Returning the required company page
        const {name,
            description,
            sector,
            subindustry,
            symbol,
            images} = company
      
    
        return (
           <>
           <StyledHero img={images[0]}>
               <Link to='/explore' className='btn-primary' style={{marginTop:"20rem"}}>
                   Back to explore
               </Link>
           </StyledHero>
        
           <section className="single-room">
            <div style={{textAlign:"center"}}><h2>{name}</h2></div>
            <div className="stock-graph"><Stock company={company}/></div>
               <div className="single-room-info">
                   
                   <article className="desc">
                       <h3>About the Company</h3>
                       <p>{description}</p>
                    </article>
                    <article className="info">
                       <h3>info</h3>
                       <h6> 
                        <Tips explanation="A stock symbol is a unique series of letters assigned to a security for trading purposes"/>
            stock symbol: {symbol}
                       </h6>
                       <h6>
                       <Tips explanation="A sector is an area of the 
                economy in which businesses share the same or 
                a related product or service."/> 
                        GICS sector: {sector}
                       </h6>
                       <h6>
                       <Tips explanation="An industry group is a classification method for individual companies or stocks that creates groupings based on common lines of business."/>
                       GICS subindustry: {subindustry}
                       </h6>
                       
                    </article>
                    
               </div>
               <div style={{textAlign:"center",marginBottom:"2rem"}}>
               <Link to="/payment"><button className="btn-primary">Invest</button></Link>
               </div>
           </section>
           
           </>
        )
    }
}
