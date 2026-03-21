const {Sequelize} = require("sequelize");
require('dotenv').config();
const dbConfigLocal =
    `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

var databaseConnectionString = process.env.DB_URL;

module.exports = databaseConnectionString;