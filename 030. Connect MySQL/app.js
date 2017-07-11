const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    database : 'test_db',
    user : 'root',
    password : 'uursty199'
});

connection.connect();

connection.query('SELECT * FROM test_table', (err, rows) => {
    console.log(rows);
});
