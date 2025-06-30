/* 
    실습 목표 : post방싣의 데이터 처리
    post 특징 : 데이터가 url에 등장하지 않는다. -> 데이터가 숨겨져서 넘어간다.
        * 완벽하게 안보이는 건 아니다.
    get 작업 순서: 사용자가 값을 전달  -> url -> string를 object로 변경
    post 작업 순서 : 사용자가 값을 전달 -> 데이터가 암호화  -> 데이터의 복호화 -> string를 object로 변경


*/ 

const http = require("http");
// post방식에서 문자 -> 객체 변환
const qs = require("querystring");

http.createServer((req,res)=> {
    // post데이터를 처리해서 저장할 때 body라는 공간을 사용한다.
    let body = "";
    // 1) 데이터를 받아오는 영역
    req.on("data",(data)=>{
        // 사용자가 보낸 data가 buffer데이터로 전송 -> 문자로 변경
        console.log(data);
        // buffer형태의 데이터를 하나하나 누적해서 저장 -> 값을 하나씩 보내니깐
        body += data;
        console.log(body)
    })
    // 2) 데이터를 변환해서 처리하는 영역
    req.on("end",()=>{
        // body의 데이터를 객체로 변환 -> 각각의 값에 접근하기 위해서
        // post는 url에 데이터가 없기 때문에 -> url모듈 사용 불가능 -> querystring모듈 사용
        let post_data= qs.parse(body);
        console.log(post_data)
        console.log(post_data.id)
        console.log(post_data.pw)

        // 실습 : id가 123고 pw가 456이라면 사용자에게 "login success" 보내주기
        // 그렇지 않다면 "login fail"보내주기
        // 조건문, and연산자,res.write() -> end까지 신경쓰자

        if (post_data.id == "123" && post_data.pw == "456") {
            res.write("login success");
        } else {
            res.write("login fail");
        }

        res.end()


    })
}).listen(3000)

/* 
    이번 실습 키포인트
    1) post방식은 데이터를 url에 동반해서 보내지 않는다.
        - buffer타입으로 쪼개서 보낸다. -> 보안때문에
    2) body공간 기억하자 -> buffer형태의 데이터를 담아주는 공간
    3) 문자형태의 데이터는 사람이 쓰는 데이터 -> 컴퓨터는 여러데이터를 관리 할 때 객체로 관리
        -String -> Object
    4) 특정 값이 전달되면 조건식은 보통 함께 사용한다.
*/ 