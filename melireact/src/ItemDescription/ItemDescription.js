import React, { Component } from 'react';

class ItemDescription extends Component{
    constructor(props){
        super(props)
        const productId = props.match.params.id

        this.state={
            productId:productId,
        }
    }
    async componentDidMount(){
        const request = await fetch("/api/items/" +this.state.productId)
        const results = await request.json()
        
        this.setState({
            item: results.item,
        })
    }

    render(){
        const item = this.state.item
        if (!item){
            return(
                <h3>Searching Product</h3>
            )
        }
        var freeShipping =  ""

        if (item.free_shipping){
            freeShipping = "Envio gratuito" 
        }

        return(
            <div>
            <h3>{item.title}</h3>
            <h4>{item.price.currency} {item.price.amount},{item.price.decimals}</h4>
            <h5>Items Sold: {item.sold_quantity}</h5>
            <div>{item.condition}</div>
            <div>{freeShipping}</div>
            <img src={item.picture}/>
            <h5>{item.description}</h5>    
        </div>
        )
    }
}

export default ItemDescription