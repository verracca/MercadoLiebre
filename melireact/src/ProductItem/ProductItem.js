import React from 'react'
import {Link} from 'react-router-dom'

const ProductItem = (props) => {
    const item = props.item

    var freeShipping =  ""

    if (item.free_shipping){
        freeShipping = "Envio gratuito" 
    }

    return(
        <div>
        <Link to={"/items/" + item.id}>
        <div id={item.id}>
            <img src={item.picture} />
            <h2>{item.title}</h2>
            <h4>{item.price.currency} {item.price.amount},{item.price.decimals}</h4>
            <div>{item.condition}</div>
            <div>{freeShipping}</div>

        </div>
        </Link>
        </div>
    )
}

export default ProductItem