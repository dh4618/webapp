import React from "react"
import Hero from './Hero';
import Banner from "./Banner";
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import { CompanyProvider } from "../context";

export default function Company({company}) {
    const{name,slug,images,subindustry,sector} = company;
    
    return (
        <article className="room">
            <div className="img-container">
                <div className="company-logo">
                    <img src={images[0]} alt="single company"></img>
                </div>
                <div className="price-top">
                    <h6>$100</h6>
                    <p>per night</p>
                </div>
                <Link to={`/explore/${slug}`} className="btn-primary room-link">Feature</Link>
            </div>
            <p className="room-info">
                {name}
            </p>
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

