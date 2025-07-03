const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mainRouter = require("./routes/mainRouter")
const userRouter = require("./routes/userRouter")

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended : true}));
app.use("/",mainRouter);
app.use("/user",userRouter);


app.listen(3000);

