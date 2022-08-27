const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment= require('moment')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://SudeepKumar874:cTbGUg6fWzq3zyfB@cluster0.ks18sd9.mongodb.net/SudeepKUmar874-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )





app.use (
    function (req, res, next) {
        console.log("I am midlleof the middleware")
        console.log(moment().format('YYYY,MM,DD'))
        console.log(moment().format('h:mm:ss'))
        console.log(req.ip)
        console.log(req.originalUrl)
        next()
        
  }
  );
  app.use('/', routes);
  


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
