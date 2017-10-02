var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('templeWelcome', { title: 'IP Temple' });
});

router.get('/temple', function(req, res){
					res.render('templeChat', { title: 'IP Temple' });
					});

module.exports = router;
