
const newPublisherModel= require("../models/newPublisherModel")

const createPublisher= async function (req, res) {
    let publisher= req.body
    let publisherCreated = await newPublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getPublisherData= async function (req, res) {
    let authors = await PublisherModel.find()
    res.send({data: authors})
}




    

module.exports.createPublisher= createPublisher
module.exports.getPublisherData=createPublisher

