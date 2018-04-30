const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/deptgo');
mongoose.Promise =  global.Promise;

app.use(bodyParser.json());
app.use('/api',require('./routes/api'));

// Error Hendling
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.massage});
});

app.listen(process.env.port||4000,function(){
    console.log("Now listening for Requests");
});