const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

module.exports = dbConnection;
