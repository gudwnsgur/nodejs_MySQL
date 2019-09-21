// query에 data 전달 

let mysql = require('mysql');
let config = require('./config.js');
 
let connection = mysql.createConnection(config);
 
let sql = `SELECT * FROM todos WHERE completed=?`;
connection.query(sql, [false], (error, results, fields) => {
    // query 함수 호출 시 배열을 두 번째 인수로 전달. sql의 ? 에 순서대로 대체
    // ? == [false]

  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});
 
connection.end();