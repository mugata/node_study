/* 
    Node를 활용해서 서버 제작
    1. Node.js는 서버가 아니다. -> 런타임 환경(언어가 실행될 수 있는 환경)
        * 브라우저에서만 실행되던 js를 내 컴퓨터에서 동작하게 만들었다.
    2. Node.js에 존재하는 http모듈을 활용해서 간단한 서버 제작
*/

// 모듈 호출
const http = require("http");
const ip = require("request-ip");

// 대화 : http로 서버 만들어줘
http.createServer((req,res) => {
    console.log("서버가 실행됐습니다.")
    // 사용자에게 서버에 접근하면 "hello world"글자를 출력
    // * 서버가 사용자에게 응답할 떄는 response를 활용한다.
    // 대화 : res로 hello world글자를 작성해줘
    res.write("Hello World");
    // 사용자가 서버에 접속했을 때 접속한 ip 확인
    let user_ip = ip.getClientIp(req)
    console.log("사용자가 접속한 ip는 ",user_ip);
   // 응답을 종료할 때는 반드시 끝난다. 명시
    res.end()
}).listen(3000)

/* 
    통신 : 요청하는 clint, 응답하는 server가 존재한다.
    키포인트 : clint(requests) / server(response)
    서버를 제작할 때는 반드시 포트번호가 필요하다(3000)
*/ 

