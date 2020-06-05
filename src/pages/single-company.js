import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {CompanyContext} from "../context" 

export default class single_company extends Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        
    }
    render() {
        return (
            <div>
                <h2> hello from single company</h2>
            </div>
        )
    }
}
