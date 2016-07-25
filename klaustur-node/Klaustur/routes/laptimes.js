var express = require('express');
var router = express.Router();
var connection = require('./connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var id = req.query.id;
	var laptimes;
	
	connection.query('SELECT * FROM laptimes WHERE laptimes.result_id = ?', id, function(err, results) {
		if (err) {
			res.send({
				'results': false
			});
		}
		else {
			console.log(results);
			res.send({
				'results': true,
				'laptimes': results
			});
		}
	});

});

module.exports = router;
