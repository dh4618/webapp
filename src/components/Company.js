import React from "react"
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import { CompanyProvider } from "../context";
import ExploreCard from "./ExploreCard"

export default function Company({company}) {
    const{name,slug,images,subindustry,sector} = company;
    
    return (
        <article className="company">
         <Link to={`/explore/${slug}`} >
           <ExploreCard company={company}/>
        </Link>
           
        </article>

    )
}

Company.propTypes ={
    comopany:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        sector:PropTypes.string.isRequired,
        subindustry:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}

