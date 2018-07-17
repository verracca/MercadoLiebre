const idServices = require("../services/idServices");

let self={}

self.results = (req, res) =>{
    const items = req.params.id
    idServices.getProductById(items).then(function(results){
        return res.json({results}) 
    }).catch(function(err){
        console.log("error")
    })
}

module.exports= self