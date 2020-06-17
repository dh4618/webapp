import React from 'react'
import {Link} from 'react-router-dom'
import Post from "../components/Post"
import Postbody from "../components/Postbody"


export default function discussion() {
    return (
        <div className="discussion">
            <h1 style={{textAlign:"center", paddingTop:"3rem"}}>Discussion</h1>
            <div className="discussionHero">
            <Postbody/>
            </div>

        </div>
    )
}