const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
    if (err) {
      console.log('There is a terrible terrible error in db connection.connect()', err);
    } else {
      console.log('Connected to the MySQL server');
    }
  });

module.exports = connection;