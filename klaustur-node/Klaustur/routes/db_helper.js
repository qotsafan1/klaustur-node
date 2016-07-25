var mysql = require('mysql');
var connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'klaustur'
});

connection.query('SELECT * FROM groups', function(err, results) {
	if (err) throw err;
	console.log(results);
	
	exports.getGroups = function() {
		return results;
	};
});

connection.query('SELECT * FROM results', function(err, results) {
	if (err) throw err;
	console.log(results[0]);
	
	exports.getResults = function() {
		return results;
	};
});

connection.query('SELECT * FROM laptimes', function(err, results) {
	if (err) throw err;
	console.log(results[0]);
	
	exports.getLaptimes = function() {
		return results;
	};
});