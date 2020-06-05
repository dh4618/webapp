import React, { Component } from 'react'
import {CompanyContext} from "../context"
import Loading from "./loading"
import Company from "./company"
import Title from "./Title"

export default class FeaturedCompany extends Component {
    static contextType = CompanyContext
    render() {
        const {featuredCompanies: companies}  = this.context
        
        return (
            <div>
                <h2>
                Hello From featured company</h2> 
                <Company></Company>
                <Loading/>
            </div>
        )
    }
}
