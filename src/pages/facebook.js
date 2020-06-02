import React, { Component } from "react"
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import {Link} from "react-router-dom";


export default class facebook extends Component {
    render() {
        return (
            <Hero hero="roomsHero">
                <Banner title="Facebook">
                    
                <Link to="/payment">
               Buy Stock
                </Link>
                </Banner>
            </Hero>

        )
    }
}
