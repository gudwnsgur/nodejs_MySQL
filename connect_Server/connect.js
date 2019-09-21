// 1. mysql module 불러오기
let mysql = require('mysql');

// 2. MySQL DB와의 연결 > createConnection() 함수 사용
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gud1212!@!@',
    database: 'todoapp'
});

// 3. MySQL DB 서버와 연결 > connect() 함수 사용
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected to the MySQL server.');
  });

// 4. DB 연결 종료
  connection.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
  });


// 즉시 연결 강제 종료 : connection.destroy(); 