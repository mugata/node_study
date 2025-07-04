/* 
    db.js -> mysql에 접근할 수 있는 연결정보를 관리하는
    주의점 : mysql2 모듈을 설치가 필요하다.
    사용법 : workbench에 입력했던 연결정보를 똑같이 입력
*/ 
const mysql = require("mysql2");

// mysql모듈을 통해서 연결을 생성
const conn = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "12345",
    database : "node"
})

// 작성한 연결정보를 가지고 db에 연결해!
conn.connect(); 
console.log("db연결 완료")

module.exports = conn;