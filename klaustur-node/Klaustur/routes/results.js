var express = require('express');
var router = express.Router();
var eventResults;
var db = require('./db_helper');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('results', { 
		results: db.getResults(),
		groups: db.getGroups() 
	});
});

module.exports = router;
