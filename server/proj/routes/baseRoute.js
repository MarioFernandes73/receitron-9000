var express = require('express');
var router = express.Router();

var port = process.env.PORT || 3000; // used to create, sign, and verify tokens

router.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

router.get('/api', function (req, res) {
    res.send('oi server');
});

module.exports = router;