import React, { Component } from 'react'
import Title from "./Title"
import {BsBook, BsPeopleFill} from "react-icons/bs"
import {FaMoneyBill} from "react-icons/fa"


class Service extends Component {
    state={
        services:[
            {
                icon:<BsBook/>,
                title:"learning",
                info: "Learn the basic stock knowledge to make your first move"
            },
            {
                icon:<BsPeopleFill/>,
                title:"community",
                info: "Meet different people and see what they think"
            },
            {
                icon:<FaMoneyBill/>,
                title:"invest",
                info: "Start invest and grow your money"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="service"/>
    <div className="services-center">
        {this.state.services.map((item,index)=>{
    return <article key={index} className="service">
        <span>{item.icon}</span>
        <h6>{item.title}</h6>
        <p>{item.info}</p>
    </article>
        })}
    </div>
            </section>
        )
    }
}

export default Service
