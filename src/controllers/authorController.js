const authorModel= require("../models/AuthorModel")
const userModel = require("../models/userModel")


const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}


module.exports.createAuthor= createAuthor


