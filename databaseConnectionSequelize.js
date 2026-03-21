require('dotenv').config();

var databaseConnectionString = process.env.DB_URL;
module.exports = databaseConnectionString;