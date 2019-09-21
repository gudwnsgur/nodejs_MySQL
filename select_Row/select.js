// 기본적인 query 실행

let mysql = require('mysql');
let config = require('../config');
let connection = mysql.createConnection(config);

let sql = `SELECT * FROM todos`;
connection.query(sql, (error, results, fields) => {
    if(error) {
        return console.log(results);
    }
    console.log(results);
});

connection.end();   