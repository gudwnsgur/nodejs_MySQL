// Node.js 에서 테이블에 행(row) 삽입

let mysql = require('mysql');
let config = require('./config');
let connection = mysql.createConnection(config)

let sql =  `INSERT INTO todos(title,completed)
VALUES('Learn how to insert a new row2',true)`;

// execute the insert statment
connection.query(sql);

connection.end();