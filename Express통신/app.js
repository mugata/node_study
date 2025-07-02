const express = require("express");
const app = express();
// Express에서 post데이터를 처리하기 위해서는 반드시 모듈의 도움이 필요.
// Express에서 모듈을 호출하면 반드시 app에게 등록해줘야한다.
const bodyParser = require("body-parser");

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended : true}))

app.get("/",(req,res)=> {
    // 사용자가 메인사이트에 방문하면 로그인페이지 출력
    res.sendFile(__dirname + "/public/로그인.html")
})

// 사용자가 getLogin경로를 요청하면 응답할 코드
app.get("/getLogin", (req,res) => {
    console.log("코드가 실행됐습니다.!!")
    // console.log("겟방식 로그인 호출")
    // get방식으로 보낸 데이터를 처리
    console.log(req.query);
    let data = req.query;
    console.log(data.id);
    console.log(data.pw);


    // 실습 : 사용자가 보낸 id값이 test고 pw값이 1234라면 -> 로그인성공.html전송
    // 실습 : 그렇지 않다면 로그인실패.html 전송하기
    // 기능 : 조건문, &&, sendfile
    if ((data.id) == "test" && (data.pw) == "1234") {
    // res.sendFile(__dirname + "/public/로그인성공.html");
    res.redirect("/로그인성공.html");
  } else {
    // res.sendFile(__dirname + "/public/로그인실패.html");
    res.redirect("/로그인실패.html");
  }
    
})

// 사용자가 postLogin으로 요청했을때 처리할 로직
app.post("postLogin",(req,res) =>{
  // 모듈등록도 완료가 됐다. -> 값을 꺼내 쓰기만 한다.
  console.log(req.body)
})



app.listen(3000)

/* 
    Express에서 get방식을 처리하는 방법 주의점
    1) form의 action의 경로를 신경쓰자
    2) app.get() -> get방식으로 처리하겠다.
    3) get방식의 데이터를 조회할 때는 req.query값을 꺼내쓰자
        -> 기존에는 문자를 객체로 변환하는 코드가 필요
        -> express에서는 자동으로 변환을 해준다.

    sendfile 특징
      - URL은 변하지 않고 화면의 파일만 변경한다.
      - 문제점 : 해당하는 코드가 DB변경, 결제 등 사용자의 정보에 관련된 내용이라면 오류가 발생
      - 사용처 : 메인페이지를 방문했을 떄 페이지 보여주기.
    redirect 
      - 주소 자체를 변경하는 방법
      - 사용처 : 서버가 클라이언트가 보낸 값을 처리 후 경로 자체를 변경.

*/ 