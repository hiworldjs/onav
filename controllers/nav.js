var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {        res.sendFile(path.join(__dirname+'/../public/onav.html'));
});

router.get('/hnav.css', function(req, res) {      res.sendFile(path.join(__dirname+'/../public/onav.css'));
});

router.get('/:id([0-9]{5})', function(req, res) {
    res.send(`GET nav: ${req.params.id}`);
});

router.get('*', function(req, res) {
    res.send('Sorry, we coudln\'n dig more.');
});

module.exports = router;