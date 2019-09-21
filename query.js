// Node.js 에서 Mysql로 Table 생성

let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gud1212!@!@',
  database: 'todoapp'
});

// 1. MySQL DB 서버에 연결 > connect()
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    let createTodos = `create table if not exists todos(
                            id int primary key auto_increment,
                            title varchar(255)not null,
                            completed tinyint(1) not null default 0
                        )`;
   
    // 2. create table > query() 
    connection.query(createTodos, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    });
   
    // 3. 연결 닫기
    connection.end(function(err) {
      if (err) {
        return console.log(err.message);
      }
    });
  });