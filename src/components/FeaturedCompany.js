import React, { Component } from 'react'
import {CompanyContext} from "../context"

export default class FeaturedCompany extends Component {
    static contextType = CompanyContext
    render() {
     
           
        return (
           

            <div>
                From featured company 
            </div>
        )
    }
}
