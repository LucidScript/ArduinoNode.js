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

module.exports = connection;