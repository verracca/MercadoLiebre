const productServices = require("../services/productServices");

let self={}

self.results = (req, res) =>{
    const items = req.params.query

    productServices.getAdaProducts(items).then(function(results){

        return res.json( results,{

        }) 

    }).catch(function(err){

    })
}

module.exports= self