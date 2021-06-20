'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'dbfarm'
});


dbConn.connect(function(err) {
   if(err) throw err;
   console.log("Database connected");
});

module.exports = dbConn;