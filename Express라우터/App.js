/* 
    Router = 경로를 담당하는 역할 (이정표)
    - 경로상 들어온 요청을 처리하는 역할 -> 서버파일에서 역할을 분리
*/ 

const express = require("express");
const app = express()
// 내가 제작한 라우터와 app을 연결하기
const mainRouter = require("./routes/mainRouter");
const subRouter = require("./routes/subRouter")
// 라우터 등록하기
app.use("/", mainRouter);
app.use("/esports",subRouter);
app.listen(3000)

