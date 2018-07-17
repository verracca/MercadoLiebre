const idServices = require("../services/idServices");

let self={}

self.results = async (req, res) =>{
    const id = req.params.id
    try{
        let results = await idServices.getProductById(id)

        let description = await idServices.getDescriptionById(id)
        
        const nombre='vero'

        res.json({nombre, description , results})

    }catch(err){
        console.log(err)
    }
}

module.exports= self