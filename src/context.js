import React, { Component } from 'react'
import items from "./data"
const CompanyContext = React.createContext();

//Provider allow all component in the component tree to access it 
//<RoomContext.Provider value={}
class CompanyProvider extends Component {
    state={
        companies:[],
        sortedCompanies:[],
        featuredCompanies:[],
        loading:true //useful when we are using the external data from contentful
    };
    //getData
    componentDidMount() {
        //this.getData
        let companies = this.formatData(items);
        let featuredCompanies = companies.filter(company => company.featured ===true);
        this.setState({
            companies, 
            featuredCompanies, 
            sortedCompanies:companies, 
            loading:false
        });

    }

    //Format the data from data.js and pass it to componentDidMount()
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let company = {...item.fields, images, id}
            return company;
        });
        return tempItems;
    }
        //first get the list of companies to tempCompany
        //find the company that matches the slug, find is finding the first match and return an object
    getCompany =(slug) => {
        let tempCompany = [...this.state.companies];
        const company = tempCompany.find((company)=>company.slug === slug)
        return company;
    }


    render() {
        return (
            <CompanyContext.Provider 
            value={{
                ...this.state, 
                getCompany:this.getCompany
                }}
            >
                {this.props.children}
            </CompanyContext.Provider> 
                
        
        )
    }
}

const CompanyConsumer = CompanyContext.Consumer;

export function withCompanyConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <CompanyConsumer>
            {value =><Component {...props} context={value}/>}
        </CompanyConsumer>
    }
}

export{CompanyProvider,CompanyConsumer, CompanyContext};
