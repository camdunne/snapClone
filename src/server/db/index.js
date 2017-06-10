const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'snap',
});

module.exports = dbConnection;
