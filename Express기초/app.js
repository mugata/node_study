/* 
    Express 프레임워크 설정 방법(순서)
    1) 워크스페이스에 express모듈 설치하기
    2) 메인서버파일 제작하기 -> app.js
    3) 역할을 담당하는 폴더 제작
        - config = 연결 정보를 담당하는 폴더(db,key)
        - public = 정적 파일들을 관리하는 공간(img,js,css,html)
        - routes = 경로를 담당하는 공간(이정표)
        - views = 동적HTML을 관리하는 공간 -> react대체


    app.js =  사장님
    - express에서 가장 중요한 역할을 하는 파일
    - 역할 : 서버생성 ,모듈등록,업무지시,환경설정
*/ 

// 1. Express버전의 서버를 생성 -> http모듈을 대체
 const express = require("express");

// 2. express의 모든 기능을 호출해서 담아주기.
// 앞으로 모든 역할은 app 지시 -> 가장 중요한 변수
const app = express();

// 3. 사용자가 메인페이지로 접속했을 때 처리할 코드
app.get("/",(req,res) =>{
    // console.log("서버생성완료")
    // 사용자에게 페이지에 방문했을 떄 응답
    // res.send("어서오세요 저희 홈페이지 입니다.")
    // send는 특정 값 하나를 보낼때는 사용 -> html 자체를 보낼때는 비효율
    // public에 만들어준 html파일을 응답 -> 파일자체를 보내겠다.
    // 절대경로가 모든 사용자가 다르다 -> 특정 값으로 고정하면 오류가 발생
    // 사용자의 절대경로를 알아서 가져오는 키워드 -> __dirname
    console.log(__dirname)
    res.sendFile(__dirname + "/public/main.html")

})


// 4. 포트 등록하기 -> listen -> 따로 등록하기
app.listen(3000)

/* 
    Express 규칙 2가지
    1) 정해진 폴더에 정해진 파일들을 관리한다.
    2) 파일을 호출할 떄는 반드시 절대경로를 사용한다.
        - __dirname : 알아서 실행하는 사람의 절대경로를 조회하는 키워드
    3) img, css, js, video 등 파일을 불러올 때는 절대경로를 사용한다.
        -app에게 등록을 해야한다. -> 앞으로 파일을 불러올떄는 무조건 public에 가세요.

*/ 
