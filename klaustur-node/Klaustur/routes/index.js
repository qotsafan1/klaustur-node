var express = require('express');
var router = express.Router();
var groups;
var db = require('./db_helper');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { groups: db.getGroups() });
});

module.exports = router;
