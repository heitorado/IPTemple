var Firebase = require('firebase');
var express = require('express');
var router = express.Router();
//var db = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('templeWelcome', { title: 'Templo de IP' });
});

router.get('/list-messages', function(req, res, next){
	var messages = db.listAll();
	res.send(messages);
})

router.get('/homemade-Dynamite', function(req, res){
					res.render('templeMessages', { title: 'IP Temple' });
					});

router.get('/testpage2556', function(req, res){
					res.render('templeMessages_beta', { title: 'IP Temple' });
					});

module.exports = router;
