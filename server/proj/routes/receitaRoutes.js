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

/* GET user by id - /api/user/{id} */
router.get('/:user_id', function (req, res) {

});

router.get('/page/:page', function(req, res){
    let page = req.params["page"];
    Receita.paginate({}, { page: page, limit: 10 }, function(err, result) {
        if(err){
            return res.send(error);
        }
        return res.send(result);
    });
})

module.exports = router;