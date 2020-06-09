import React from 'react'
import {useContext} from 'react'
import {CompanyContext} from  '../context'

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}




export default function CompaniesFilter({companies}) {
    const context = useContext(CompanyContext);
    const {
        handleChange, sector, subindustry, price,minPrice, maxPrice,
    } = context;

    //get unique options
    let sectors = getUnique(companies,'sector');
    sectors=['all', ...sectors];

    sectors = sectors.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    let subindustries = getUnique(companies, 'subindustry');
    subindustries=['all', ...subindustries];
    subindustries = subindustries.map((item,index) => {
        return <option value={item} key={index}>{item}</option>    
    })
    

    return (
        <section className="filter-container">
            <form className="filter-form">
                {/*select sector*/}
                <div className = "form-group">
                    <label htmlFor="sector"> Economic Sector</label>
                    <select 
                        name="sector" 
                        id="sector" 
                        value={sector} 
                        className="form-control" 
                        onChange={handleChange}>
                    {sectors}
                    </select>
                       
                </div>
                {/*end select sector*/}

                {/*select subindustry*/}
                <div className = "form-group">
                    <label htmlFor="subindustry"> Economic Subindustries</label>
                    <select 
                        name="subindustry" 
                        id="subindustry" 
                        value={subindustry} 
                        className="form-control" 
                        onChange={handleChange}>
                    {subindustries}
                    </select>
                       
                </div>
                {/*end select subindustry*/}
            </form>
        </section>
    )
}
