var express = require('express');
var User = require('../models/user.js')
var router = express.Router();
var app = require('../../index');

//  *******
//  * GET *
//  *******

/* GET all users - /api/user */
router.get('/',  function (req, res) {
    User.find(function (err, users) {
        if (err) {
            res.send(err);
        } 
        res.json(users);
    })
});

/* GET user by id - /api/user/{id} */
router.get('/:user_id', function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    })
});

//  ********
//  * POST *
//  ********

/* POST new user - /api/user */
router.post('/register', function (req, res) {
    let username = req.params["username"];
    let user = new User();
    user.name = req.body["username"];
    user.save(function(err){
        if(err){
            return res.send(err);
        }
        return res.json({"status":200, "message":"User saved"});
    })
});


module.exports = router;