import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import ExploreContainer from "../components/ExploreContainer"


const explore = () => {
    return (
      <div className="explorepage">
     
      <Hero hero="exploreHero">
        <Banner title="Explore..">
        <div className="search">
        <form>
          <label>
           <input type="text" name="name" placeholder="Searching for company" />
          </label> 
           <input type="submit" value="Find" />
        </form>
      </div>
      
        </Banner>
      </Hero>

      <div className="filter">
        Filters here
      </div>
      <ExploreContainer/>
      
      </div>
    )
}

export default explore;
