import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import queryString from "query-string"

class SearchBox extends Component{
    constructor(props){
        super(props)
        const searchQuery = queryString.parse(this.props.location.search).search

        this.state={
            searchQuery: searchQuery || ""
        }
    }

    handleInputChange(event){
        const newValue = event.target.value
        this.setState({
            searchQuery:newValue
        })
    }

    render(){
        return(
            <div>
                <input
                onChange={this.handleInputChange.bind(this)} 
                value = {this.state.searchQuery}
                ></input>
                <Link to={"/items?search=" + this.state.searchQuery}>
                    <button>Buscar</button>
                </Link>
            </div>
        )
    }
}

export default SearchBox