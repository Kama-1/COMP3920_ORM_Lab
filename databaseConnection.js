const mysql = require('mysql2/promise');
const databaseConnectionString = require("./databaseConnectionSequelize");
require('dotenv').config();

const dbConfigLocal = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	multipleStatements: false,
	namedPlaceholders: true
};

var database = mysql.createPool(databaseConnectionString);

module.exports = database;
		