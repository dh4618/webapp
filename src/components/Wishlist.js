import React from 'react'
import Company from './Company'
import {useContext} from 'react'
import { CompanyConsumer } from '../context'


function Wishlist({context}){
    const {loading, sortedCompanies, companies} = context;
    if (loading){
        return <Loading/>
    }

    if(companies.length === 0){
        return (
            <div className="empty-search">
                <h3>Your Wishlist is empty</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    companies.map(item => {
                        if (!item.state.wishlist){return(null);}

                        return(<Company key={item.id} company={item}/>)
                    })
                }
            </div>
        </section>

    )
}
export default Wishlist;
