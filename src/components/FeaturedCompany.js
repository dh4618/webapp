import React, { Component } from 'react'
import {CompanyContext} from "../context"

export default class FeaturedCompany extends Component {
    static contextType = CompanyContext
    render() {
        const {featuredCompanies: companies}  = this.context
        
        return (
            <div>
                <h2>Hello From featured company</h2> 
            </div>
        )
    }
}
