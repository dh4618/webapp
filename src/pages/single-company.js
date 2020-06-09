import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {CompanyContext} from "../context" 
import StyledHero from "../components/StyledHero"
import Stock from "../components/Stock"

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
            subindustry,images} = company
    
        return (
           <>
           <StyledHero img={images[0]}>
               <Banner title={`${name} `}> </Banner>
               <Link to='/explore' className='btn-primary'>
                   Back to explore
               </Link>
           </StyledHero>
           <section className="single-room">
            <div><h1><Stock/></h1></div>
               <div className="single-room-info">
                   
                   <article className="desc">
                       <h3>About the Company</h3>
                       <p>{description}</p>
                    </article>
                    <article className="info">
                       <h3>info</h3>
                       <h6>subindustry: {subindustry}</h6>
                       <h6>sector: {sector}</h6>
                    </article>
               </div>



           </section>
           </>
        )
    }
}
