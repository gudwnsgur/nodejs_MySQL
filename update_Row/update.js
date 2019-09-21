let mysql  = require('mysql');
let config = require('../config');
let connection = mysql.createConnection(config);

//update statement
let sql = `UPDATE todos
           SET completed = ?
           WHERE id = ?` ;

let data = [false, 1];

//execute the UPDATE statement
connection.query(sql, data, (error, results, fields) => {
    if(error) {
        return console.log(error.message);
    }
    console.log('Row affected', results.affectedRows);
});

connection.end();