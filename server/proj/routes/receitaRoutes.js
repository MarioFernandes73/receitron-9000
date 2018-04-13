var isoFunc = require('../middleware/decode.js');
var express = require('express');
var Receita = require('../models/receita.js')
var router = express.Router();
var app = require('../../index');

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
        return res.send(resData);
    });
})

function decodeAndReturn(req, res, resData){
    return res.send(resData);
}

module.exports = router;