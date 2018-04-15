var express = require('express');
var User = require('../models/user.js')
var Receita = require('../models/receita.js')
var router = express.Router();
var app = require('../../index');

//  *******
//  * GET *
//  *******

/* GET all users - /api/user */
router.get('/', function (req, res) {
    User.find(function (err, users) {
        if (err) {
            return res.send(err);
        }
        return res.json(users);
    })
});

/* GET user by id - /api/user/{id} */
router.get('/:user_id', function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            return res.send(err);
        return res.json(user);
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
    user.save(function (err) {
        if (err) {
            return res.send(err);
        }
        return res.json({ "status": 200, "message": "User saved" });
    })
});

router.post('/addFavourite', function (req, res) {
    User.find({ name: req.body["username"] }, function (err, userResult) {
        if (err) {
            return res.send(err);
        }
        console.log(userResult)
        if (req.body["receita"]) {
            userResult[0]["receitasFavoritas"].push(req.body["receita"])
            userResult[0].save(function (err) {
                if (err) {
                    return res.send(err);
                }
                return res.json({ "status": 200, "message": "Added recipe to user" });
            })
        }
    })
})

router.post('/addIngrediente', function (req, res) {
    User.find({ name: req.body["username"] }, function (err, userResult) {
        if (err) {
            return res.send(err);
        }
        console.log(userResult)
        if (req.body["ingrediente"]) {
            userResult[0]["carrinho"].push(req.body["ingrediente"])
            userResult[0].save(function (err) {
                if (err) {
                    return res.send(err);
                }
                return res.json({ "status": 200, "message": "Added ingrediente to user's little car" });
            })
        }
    })
})

router.post('/receitas', function (req, res) {
    User.find({ name: req.body["username"] }, function (err, userResult) {
        if (err) {
            return res.send(err);
        }
        console.log(userResult)

        return res.json(userResult[0]["receitasFavoritas"])

    })
})

router.post('/ingredientes', function (req, res) {
    User.find({ name: req.body["username"] }, function (err, userResult) {
        if (err) {
            return res.send(err);
        }
        console.log(userResult)

        return res.json(userResult[0]["carrinho"])

    })
})


module.exports = router;