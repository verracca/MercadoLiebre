import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import queryString from "query-string"
import "./SearchBox.css"

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
            <div className= "container-searchbox">
            <form> <input className="input-container"
                onChange={this.handleInputChange.bind(this)} 
                value = {this.state.searchQuery}
                ></input>
                <Link to={"/items?search=" + this.state.searchQuery}>
                    <button className="boton">Buscar</button>
                </Link>
            </form>
            </div>
        )
    }
}

export default SearchBox