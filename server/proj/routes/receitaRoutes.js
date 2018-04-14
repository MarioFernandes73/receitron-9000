var express = require('express');
var Receita = require('../models/receita.js')
var router = express.Router();
var app = require('../../index');

//  *******
//  * GET *
//  *******

router.get('/',  function (req, res) {
    Receita.find(function(err, result){
        if(err){
            return res.send(err);
        }
        return res.send(result);
    })
});

/* GET receita by id - /api/receita/{id} */
router.get('/:receita_id', function (req, res) {
    Receita.findById(req.params.receita_id, function(err, result){
        if(err){
            return res.send(err);
        }
        return res.send(result);
    })
});

router.get('/page/:page', function(req, res){
    let page = req.params["page"];
    Receita.paginate({}, { page: page, limit: 5 }, function(err, result) {
        if(err){
            return res.send(error);
        }
        return res.send(result);
    });
})


//  ********
//  * POST *
//  ********


/* GET receita by ingredient - /api/receita/ingredients */
router.post('/ingredients', function (req, res) {
    var x = req.body["ingredientes"].toString().split(",")
    var restrictions = [];

    x.forEach(element => {
        restrictions.push({"ingredientes.desc": { "$regex": element, "$options": "i" }}) 
    });

    Receita.find({ $and:restrictions  }, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    })
});


/* GET receita by dificuldade - /api/receita/dificuldade */
router.post('/difficulty', function (req, res) {
    Receita.find({ "dificuldade": req.body["dificuldade"].toString()  }, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    })
});

module.exports = router;