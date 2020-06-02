import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"

const explore = () => {
    return (
       <Hero hero="exploreHero">
         <Banner title="Explore..">
           <Link to="/">
               return Home
           </Link>
        </Banner>
       </Hero>

    )
}

export default explore;
