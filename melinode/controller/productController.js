const productServices = require("../services/productServices");

let self={}

self.results = async (req, res) =>{
    if(!req.query.q){
        res.json({})
    }
    const items = req.query.q 

    try {
        const results = await productServices.getAdaProducts(items)
        
        res.json({
            autor:{
                name: "Maria Veronica",
                lastName: "Racca",
            },
            categories: getCategories(results),
            items: getItems(results),
                
        } ) 

    }catch(err){
        console.log(err)
    }
}

const getCategories = (resultado) => {
    const categories = resultado.filters.find(result=>{
        return result.id === 'category'
    })

    if (!categories){
        return []
    }
    const category = categories.values[0]

    return category.path_from_root.map((value) => {
        return value.name
    })

}

const getItems = (resultado) => {
    const items = resultado.results.map((item)=>{
        const amount = Math.floor(item.price)
        const decimals = Math.floor((item.price - amount) * 100 )
        return {
            id:item.id,
            title: item.title,
            price: {
                currency:item.currency_id,
                amount: amount, 
                decimals: decimals,
            },
            picture:item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
        }
    })
    return items
}

module.exports= self