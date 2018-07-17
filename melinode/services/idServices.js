const restler = require('restler')

let self= {}

self.getProductById = (id) =>{
    const url = "https://api.mercadolibre.com/items/"+ id

    return new Promise (function(resolve, reject){
        restler.get(url)
        .on ('success', function(result){
            console.log(result)
            resolve(result)
        }).on('fail',(error)=>{
            console.log(error)
            reject(error)
        })
    })
}

self.getDescriptionById = (id) =>{
    const url = "https://api.mercadolibre.com/items/"+ id + "/description"
return new Promise (function(resolve, reject){
    restler.get(url)
    .on ('success', function(result){
        console.log(result)
        resolve(result)
    }).on('fail',(error)=>{
        console.log(error)
        reject(error)
    })
})

}

module.exports= self