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
                name: "Veronica",
                lastName: "Racca",
            },
            categories: createCategories(results),
            
                
        } ) 

    }catch(err){
        console.log(err)
    }
}

const createCategories = (resultado) => {
    const categories= resultado.available_filters[0].values
    const categoryNames = []

    for (let i = 0; i < categories.length; i++) {
        categoryNames.push(categories[i].name)
        
    }
    return categoryNames
}

module.exports= self