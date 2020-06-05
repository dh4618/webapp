import React, { Component } from 'react'
import {CompanyContext} from "../context"
import Loading from "./loading"
import Company from "./company"
import Title from "./Title"

export default class FeaturedCompany extends Component {
    static contextType = CompanyContext
    render() {
        let {loading,featuredCompanies: companies}  = this.context
        companies = companies.map(company=>{
            return <Company key={company.id} company={company} />
        })
        return (
            <section className ="featured-rooms">
                <Title title="featured stock"/>
                <div className="featured0rooms-center">
                    {loading?<Loading/>:companies}                    

                </div>
            
            </section>
        )
    }
}
