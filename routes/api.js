const express = require('express');
const router = express.Router();
const Dept = require('../models/dept');

router.get("/dept",function(req,res){
    res.send({type: "GET"});
});

router.post("/dept",function(req,res){
    console.log("Post Complete.");
    //console.log(req.body);
    Dept.create(req.body).then(function(dept){
        res.send(dept);

    });
});

router.put("/dept/:id",function(req,res){
    res.send({type: "PUT"});
});

router.delete("/dept/:id",function(req,res){
    res.send({type: "DELETE"});
});

module.exports = router;