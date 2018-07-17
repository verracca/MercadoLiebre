const idServices = require("../services/idServices");

let self={}

self.results = async (req, res) =>{
    const id = req.params.id
    try{
        const product = await idServices.getProductById(id)

        const description = await idServices.getDescriptionById(id)
        
        const amount = Math.floor(product.price)
        const decimals = Math.floor((product.price- amount) *100)

        res.json({
            author:{
                name:"Maria Veronica",
                lastname: "Racca",
            },
            item:{
                id: product.id,
                title: product.title,
                price: {
                    currency: product.currency_id,
                    amount: amount,
                    decimals: decimals,
                }, 
                picture:product.thumbnail,
                condition: product.condition,
                free_shipping: product.shipping.free_shipping,
                sold_quantity: product.sold_quantity,
                description: description.plain_text,
            }
        })

    }catch(err){
        console.log(err)
    }
}

module.exports= self