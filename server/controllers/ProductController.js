const { where } = require('sequelize')
const {Product} = require('../models/models')

class ProductController{
    async getAll(req,res){
        try{
            let {offset} = req.query
            let {type} = req.body
            if (!type){
                const products = await Product.findAndCountAll({offset: offset, limit: 2})
                return res.json(products)
            }
            else{
                const products = await Product.findAndCountAll({where: {type} ,offset: offset, limit: 2})
                return res.json(products)
            }
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