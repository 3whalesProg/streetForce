const { Type } = require("../models/models")

class TypeController{
    async addType(req, res){
        const {name} = req.body
        await Type.create({name})
        return res.json(name)
    }

    async getType(req, res){
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()