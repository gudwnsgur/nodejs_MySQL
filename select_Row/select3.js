// 명령 행의 인수(argv[])에서 오는 data를 기반으로 Query 

let mysql = require('mysql');
let config = require('../config.js');
 
let connection = mysql.createConnection(config);
 
let id = process.argv[2]; // pass argument to query 
// 명령어의 3번째 인자 argv[2]를 id 로 하자

let sql = `SELECT * FROM todos WHERE id=` + mysql.escape(id) ; 
// id = argv[2] 인 todos 선택 
 
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});
 
connection.end();