const {Product} = require('../models/models')

class ProductController{
    async getAll(req,res){
        try{
            let {offset, type, brand, gender} = req.query
            const newQuery = {}
            for (let i in Object.keys(req.query)){
                if (i != 0){
                    if (Object.values(req.query)[i]){
                        newQuery[Object.keys(req.query)[i]] = Object.values(req.query)[i] 
                    }  
                }
            }
            console.log(newQuery)
                const products = await Product.findAndCountAll({where: newQuery,offset: offset, limit: 2})
                return res.json(products)
        }
        catch(e){
            console.log(e)
        }

    }

    async getCurrentProduct(req ,res){
        try{
            let {id} = req.query
            const product = await Product.findByPk(id)
            return res.json(product)
        }
        catch(e){
            console.log(e)
        }
    }
}




module.exports = new ProductController()