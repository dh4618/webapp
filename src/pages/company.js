import React, { Component } from "react"
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

const company = () => {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="Facebook">
                    
                <Link to="/payment">
               Buy Stock
                </Link>
                </Banner>
            </Hero>

        </div>
    )
}

export default company;