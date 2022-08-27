const { count } = require("console")
const authorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data = req.body
    let authorId = data.author_id
    if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})

    let savedData= await authorModel.create(data)
    res.send({data: savedData})
}

const createorder=async function (req,res,next){
    let data=req.body
    let savedData= await authorModel .create(data)
    res.send({msg: data})
}


module.exports.createAuthor= createAuthor
moduule.exports.createorder=createorder
