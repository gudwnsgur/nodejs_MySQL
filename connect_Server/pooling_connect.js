// node.js module용 MySQL 드라이버는 내장 연결 Pooling 기능을 제공한다.


// 1. 5개의 연결로 연결 Pool 작성 
var pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'gud1212!@!@', 
    database: 'todoapp'
});

// 2. pool에서 연결 얻기 > getConnection()
pool.getConnection(function(err, connection) {
    // execute query
    // ...
  });


// 3. 완료 Pool에 대한 연결 반환을 호출 > connection.release()
pool.getConnection(function(err, connection) {
    // execute query
    // ...
    connnection.release();
  });
