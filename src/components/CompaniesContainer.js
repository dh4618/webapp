import React from 'react'
import CompaniesFilter from "./CompaniesFilter"
import CompaniesList from "./CompaniesList"
import {withCompanyConsumer} from "../context"
import Loading from "./loading"

function CompaniesContainer({context}){
    const {loading, sortedCompanies, companies} = context;
    if (loading){
        return <Loading/>
       }
    return (
        <div>
        <CompaniesFilter companies={companies}></CompaniesFilter>
        <CompaniesList companies={sortedCompanies}></CompaniesList>
        </div>
    )
}
export default withCompanyConsumer(CompaniesContainer);

