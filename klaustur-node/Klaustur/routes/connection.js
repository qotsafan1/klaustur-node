var mysql = require('mysql');
var connection = module.exports =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'klaustur'
});

connection.connect(function(err) {
	if (err) throw err;
    console.log('You are now connected...');
});