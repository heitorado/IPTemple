var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('templeWelcome', { title: 'Templo de IP' });
});

router.get('/temple', function(req, res){
					res.render('templeMessages', { title: 'IP Temple' });
					});

module.exports = router;
