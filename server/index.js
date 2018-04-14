var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var app = module.exports = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// base setup and app setup
var base = require('./proj/routes/baseRoute.js');
app.use('/', base);
var user = require('./proj/routes/userRoutes.js');
app.use('/api/user', user);
var receita = require('./proj/routes/receitaRoutes.js');
app.use('/api/receita', receita);

// database connection   : mongodb://<dbuser>:<dbpassword>@ds161336.mlab.com:61336/receita-api
mongoose.connect('mongodb://makeorbrake:r00t@ds247078.mlab.com:47078/receitas');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("we're connected!");
});
mongoose.Promise = global.Promise;

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000);

module.exports = app;
