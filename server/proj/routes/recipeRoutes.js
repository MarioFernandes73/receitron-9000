var express = require('express');
var User = require('../models/user.js')
var router = express.Router();
var app = require('../../index');

//  *******
//  * GET *
//  *******

/* GET all users - /api/user */
router.get('/',  function (req, res) {

});

/* GET user by id - /api/user/{id} */
router.get('/:user_id', function (req, res) {

});