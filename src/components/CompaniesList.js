import React from 'react'
import Company from './Company'
import { CompanyConsumer } from '../context'

export default function CompaniesList({companies}) {

    console.log(companies);
    if(companies.length === 0){
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    companies.map(item => {
                        return <Company key={item.id} company={item}/>
                    })
                }
            </div>
        </section>
        
    )
}
