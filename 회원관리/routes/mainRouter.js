const express = require("express")
const router = express.Router();
const path = require("path");
// 절대경로 + "../"
const filePath =path.join(__dirname, "../public")

// 사용자가 메인페이지로 요청할 때 메인페이지 보여주기
router.get("/", (req,res)=>{
    res.sendFile(filePath+"/main.html");
})

// 사용자가 join으로 방문했을 때 회원가입 페이지 보여주기
router.get("/join",(req,res)=>{
    res.sendFile(filePath+ "/join.html")
})

// 사용자가 login으로 방문했을 떄 로그인 페이지 보여주기
 router.get("/login",(req,res)=>{
    res.sendFile(filePath+ "/login.html")
 })

module.exports = router;