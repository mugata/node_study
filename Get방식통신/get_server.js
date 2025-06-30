/* 
    이번 실습 배울 내용 : Get방식의 특징과 사용법, 주의점 학습

    Get 특징 : 클라이언트가 서버에게 데이터를 전달할 때 데이터가 URL에 동반
    Get 장점 : 간단한 데이터 처리에는 용이하다.
    Get 단점 : 데이터가 노출, 전송할 수 있는 데이터의 개수가 한정적
    Get 사용처 : 1) 데이터가 중요하지 않을 때 사용한다.
                2) DB에 영향을 주지 않을 때 사용한다.(select)
    예외 : ex) 로그인 -> select -> post방식으로 처리

    Get으로 보내 데이터는 URL뒤에 ?값이 작성돼있다.
    QueryString방식
*/ 

const http = require("http");
// url값을 변형할 떄 사용하는 모듈
const url = require("url");

http.createServer((req,res)=> {
    // console.log("서버 생성 완료");
    // req에 담긴 url값을 조회
    // 현재 상태는 = String -> 데이터를 각각 따로 관리하기 위해서 객체 형태로 변환
    console.log(req.url);
    // 작업 : req.url 데이터를 객체 형태로 변환 -> url모듈
    let query = url.parse(req.url,true).query
    console.log(query)

    // id값과 pw값을 각각 출력 -> 객체로 변환 ->key로 접근한다.
    console.log(query.id);
    console.log(query.pw);

    res.write("hello~");
    res.end()
}).listen(3000);


/* 
    실습 정리 (핵심포인트)
    1) get방식은 데이터를 url에 전송한다
         -?id=123&pw=123
         -querystring
    2) 서버에서 값을 각각 꺼내쓰기 위해서는 String -> Object
    3) 사용자가 서버에서 보낸 모든 데이터는  req매개변수에 담긴다.
    4) 배열 : 같은 의미의 데이터를 담을 떄 사용
    5) 객체 : 다른 의미의 데이터를 담을 때 사용
*/ 

