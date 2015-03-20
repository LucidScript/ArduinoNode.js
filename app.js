// var knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         host     : 'localhost:8889',
//         user     : 'root',
//         password : 'root',
//         database : 'co2',
//         charset  : 'utf8'
//   }
// });

// var Bookshelf = require('bookshelf')(knex);

// // Pollution table
// var CO2Pollution = Bookshelf.Model.extend({
//     tableName: 'CO2Pollution'
// });

// // Post model

var mysql = require('mysql');
var connection = mysql.createConnection({
	user: 'root',
	password: 'root',
	port: 8889,
	database: 'co2'
});

connection.connect();

connection.query('SELECT * FROM CO2Pollution', function (err, rows, fields) {
	if (err) throw err.toString;

	console.log(rows);
});

connection.query('INSERT INTO CO2Pollution SET ?', {ValueX: 15.5, ValueY: 16.6, CO2: 300}, console.log.bind(console));