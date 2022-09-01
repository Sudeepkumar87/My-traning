


const createProduct= async function (req,res){
    let Data=req.body
    let savedData=await ProdutModel.create(Data)
    res.send({msg:savedData})
}