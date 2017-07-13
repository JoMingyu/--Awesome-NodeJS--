const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    database : 'test_db',
    user : 'root',
    password : 'uursty199'
});

connection.connect();

connection.query(`SELECT * FROM test_table WHERE col1='a'`, (err, rows) => {
    if(rows[0] != undefined) {
        console.log(rows);
    } else {
        console.log(undefined);
    }
});

connection.query(`INSERT INTO test_table VALUES('asdf', 'qwer')`, (err, rows) => {
    if(err) {
        console.log(err);
    } else {
        console.log('success');
    }
});
