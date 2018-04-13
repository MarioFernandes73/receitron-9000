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
    var user = new User();
    user.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    user.role = req.body.role;
    user.save(function (err) {
        if (err) res.send(err);
        res.json({ message: 'User created!' });
    })
});

module.exports = router;