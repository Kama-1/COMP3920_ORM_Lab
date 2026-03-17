require('dotenv').config();
const password = encodeURIComponent(process.env.DB_PASSWORD);
const dbConfigLocal =
    `mysql://${process.env.DB_USER}:${password}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
var databaseConnectionString = dbConfigLocal;
module.exports = databaseConnectionString;