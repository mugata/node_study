/*
    해당 파일의 역할은 사용자가 보내온 요청에 대해서 처리하는 역할
    라우터는 express안에 존재하는 하나의 기능

*/ 

const express = require("express")
const router = express.Router();
// 경로를 수정하기 위해서는 모듈 필요
// * path모듈은 app에 등록x -> app에서 호출한게 아니니까
const path = require("path");
// 절대경로 + "../"
const filePath =path.join(__dirname, "../public")


// 1. 사용자가 메인페이지를 방문하면 main.html 보여주기
router.get("/",(req,res) =>{
    res.sendFile(filePath + "/main.html")
    })

// 2. 사용자가 soccer경로를 방문하면 대응하기
router.get("/soccer",(req,res) =>{
    res.sendFile(filePath + "/soccer.html")
    })

// . 사용자가 baseball경로를 방문하면 대응하기
router.get("/baseball",(req,res) =>{
    res.sendFile(filePath + "/baseball.html")
    })



// 반드시 라우터를 제작하면 exports를 해준다 -> 내가 만든 js파일이기 떄문에.
module.exports = router;