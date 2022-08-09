const express = require('express');
const abc = require('../introduction/intro')
const loggerModule = require ('../logger/logger.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
router.get('/get-movies', function(req, res){
    let movies1={"shole"." Rang de basanti", "dil mange more", " tirange"}
    res.set(movies1)
)}
// second question
router.get('/get-movie/:indexNumber','The shining', lord of the ring', 'hatman begins')
let index = req.params.indexNumber;
console.log(movies[index])
res.send(movies[index])
module.exports = router;
// adding this comment for no reason
//third question
router.get('/get-moviess/;indexNumber',function(req, res)){
    let moviesName=['rang de basanti', 'The shining', lord of the ring,'batman begins']
    let index = req.params.indexNumber;
    if(index> moviesNmame.length){
        return res.send("use a valid index")
    } else{
        res.send(moviesName[index])
    }
    }
}