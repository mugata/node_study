const express = require("express");
const app = express();
// express에서 정적인파일(html,css,js,img..)을 사용하려면 경로를 반드시 지정
// app에게 등록해서 사용이 가능
// app에게 앞으로 정적인 파일을 호출할려면 무조건 public폴더를 경유하세요.
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/main.html");
})

app.listen(3000)