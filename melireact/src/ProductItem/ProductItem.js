import React from 'react'
import {Link} from 'react-router-dom'
import "./ProductItem.css"


const ProductItem = (props) => {
    const item = props.item

    var freeShipping =  ""

    if (item.free_shipping){
        freeShipping = "Envio gratuito" 
    }

    return(
        <Link to={"/items/" + item.id}>
        
        <div className="main-product-container" id={item.id}>
            <div className="img-container">
                <img src={item.picture} />
            </div>    
            <div className="product-container">
                <h2>{item.title}</h2>
                <h4>{item.price.currency} {item.price.amount},{item.price.decimals}</h4>
                <div>{item.condition}</div>
                <div>{freeShipping}</div> 
            </div>

        </div>
        </Link>
       
    )
}

export default ProductItem