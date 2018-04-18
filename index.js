var express = require("express");
var app     = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {        res.sendFile(__dirname + '/public/onav.html');
});
//var navController = require('./controllers/nav.js');

//app.use ('/nav', navController);

app.listen(2019);