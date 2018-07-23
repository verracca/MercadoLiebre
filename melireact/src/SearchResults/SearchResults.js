import React, { Component } from 'react';
import queryString from "query-string"
import BreadCrumb from "../BreadCrumb/BreadCrumb"
import ProductItem from "../ProductItem/ProductItem"

class SearchResults extends Component{
    constructor(props){
        super(props)

        this.state= {
            items: [],
            categories: [],
        }
    }
    
    async fetchItems(){
        const searchQuery = queryString.parse(this.props.location.search).search

        const request = await fetch("/api/items?q=" + searchQuery)
        const results = await request.json()
        
        this.setState({
            categories:results.categories,
            items: results.items,
        })
    }

    async componentDidMount(){
        await this.fetchItems()
    }

    async componentDidUpdate(prevProps){
        if(this.props.location !== prevProps.location){
            await this.fetchItems()
        }
    }

    render(){
        return(
            <div>
            <BreadCrumb categories={this.state.categories}> </BreadCrumb>
            {
                this.state.items.map(item =>{
                    return<ProductItem key={item.id} item={item}/>
                })
            }


            </div>
        )
    }
}

export default SearchResults