const userModel = require("../models/userModel");





const  createOrder=async function(req,res){
    var user=req.body.userID;
    var userfind=await userModel.findById(user);
    if(!user){
        return res.send("user id is not present")
    } if (!userfind){
        return res.send("user ide is not valid");

    }
    var product = req.body.productId;
    var productfind = await productModel.findById(product);
    if(!productfind){
        return res.send("product id is not valid");
    } if (!product){
        return res.send("product id is not present");

    }
    // var a= req.headers.isfreeappuser;
    // var b=JSON.parse(a);
    // var body2=req.body;
    // let e = await userModel.findById(user).select

}