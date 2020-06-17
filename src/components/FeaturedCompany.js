import React, { Component } from 'react'
import {CompanyContext} from "../context"
import Loading from "./loading"
import Company from "./Company"
import Title from "./Title"

export default class FeaturedCompany extends Component {
    static contextType = CompanyContext
    render() {
        let {loading,featuredCompanies: companies}  = this.context
        companies = companies.map(company=>{
            return <Company key={company.id} company={company} />
        })
        return (
            <section className ="roomslist" style={{background:"linear-gradient(50deg,  #4b6cb7 0%, #182848 70%)"}} >

                <h2 className="white-title">Featured Stock</h2>
                <div className="roomslist-center">
                    {loading?<Loading/>:companies}                    
                </div>
            
            </section>
        )
    }
}
