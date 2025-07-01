const express = require("express");
const app = express();
// express에서 정적인파일(html,css,js,img..)을 사용하려면 경로를 반드시 지정
// app에게 등록해서 사용이 가능
// app에게 앞으로 정적인 파일을 호출할려면 무조건 public폴더를 경유하세요.
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/main.html");
})

app.listen(3000);

/* 
    Express의 3번 규칙
    - 정적인 파일은 호출때는 무조건 public폴더에서 관리한다.
    - 반드시 app.js(메인서버)파일에 정적파일은 public에서 조회 셋팅이 필요하다.
    - 프론트엔드에서는 절대경로를 사용x -> 보안이슈 -> 사용자 눈에 보이는 영역
*/ 
