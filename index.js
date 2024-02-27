const express = require("express");
const {connectMongoDb} =require("./view/connection");
const {logReqRes}=require("./middleware/middleWare");
const mongoose = require('mongoose');
const userRouter=require("./routes/router");
const app=express();
const port=8100;

connectMongoDb("mongodb://127.0.0.1:27017/task-manager");

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

// app.use((req,res,next)=>{
//     console.log("asdfsda");
//     next();
// });
app.use("/user",userRouter);
app.get("/",(req,res)=>
{
    res.send("<h1>hey</h1>");
})


app.listen(port,()=>console.log(`server is started at port : ${port}`));
