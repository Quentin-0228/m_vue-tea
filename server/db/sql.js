const mysql = require('mysql');
let connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:"rootroot",
	database:'vue_store'
})
module.exports = connection;