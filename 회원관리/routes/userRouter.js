const express = require("express")
const router = express.Router();
// db연결을 담당하는 db모듈 호출
const conn = require("../config/db")

// 사용자가 회원정보를 입력해서 값이 넘어오면 DB에 넣는 코드 -> 회원가입
router.post("/join",(req,res)=>{
    // post로 보낸 데이터를 조회 (매우 중요한 작업)
    console.log(req.body);
    // 객체의 데이터를 쉽게 변수에 저장하는 방법 (비구조화 할당) -> ECMA6버전 등장
    const{id,pw,nick} = req.body;
    // DB에 insert문으로 넣어주는 로직을 제작
    // 1) 실행할 sql쿼리문 작성
    // 2) 값을 전달하는 경우에는 값을 넣어준다.
    // 3) 값과 쿼리를 conn을 통해서 실행한다.
    // 4) 결과 값을 가지고 로직을 처리한다.
    let sql = "insert into member value (?,?,?);"
    conn.query(sql,[id,pw,nick],(err,result)=>{
        console.log(result);
        // 실습 : 입력한 결과가 영향을 줬다면(insert가 됐다면) 메인페이지로 이동, 그렇지 않다면 회원가입 페이지
        if(result.affectedRows > 0) {
            // res.sendFile(filePath + "/main.html")
            res.redirect("/");
        }else {
            res.redirect("/join");
        }
    })

})

// 로그인에 대한 처리
router.post("/login",(req,res)=>{
    console.log(req.body);
    const {id,pw} = req.body;
    let sql = "select * from member where id =? and pw =?;"
    conn.query(sql,[id,pw],(err,result)=>{
        console.log(result)
        if(result.length > 0){
            res.redirect("/");
        }else{
            res.redirect("/login")
        }
    })
})

// 업데이트 처리
// 힌트 : 데이터를 보낼때 넘겨주는 순서가 중요하다(이건 닉네임부터 넘어옴), affectedRows
router.post("/update",(req,res)=>{
     console.log(req.body)
     const {nick,id,pw} = req.body;
     let sql = "update member set nick = ? where id = ? and pw = ?;"
     conn.query(sql,[nick,id,pw],(err,result)=>{
        console.log(result)
        if(result.affectedRows >= 1) {
            res.redirect("/")
        }else{
            res.redirect("/update")
        }
     })


})

// 삭제 처리
// 힌트 : affectedRows
router.post("/delete",(req,res)=>{
    console.log(req.body)
    const {id,pw} = req.body;
    let sql = "delete from member where id = ? and pw = ?;"
    conn.query(sql,[id,pw],(err,result)=>{
        console.log(result)
        if(result.affectedRows > 0) {
            res.redirect("/")
        }else{
            res.redirect("/delete")
        }
    })
})
module.exports = router;