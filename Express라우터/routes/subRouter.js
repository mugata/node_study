const express = require("express")
const router = express.Router();
const path = require("path");
const filePath =path.join(__dirname, "../public")

// 1. esports로 접속했을 때 emain.html파일 돌려주기
router.get("/",(req,res)=>{
    res.sendFile(filePath + "/emain.html")
    
})

// 2.lol페이지 처리
router.get("/lol",(req,res)=>{
     res.sendFile(filePath + "/lol.html")
})

module.exports = router;