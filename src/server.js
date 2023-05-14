// 0508 API設計練習
const express = require("express");
const app = express();
const portNum = 8088;

app.get("/",(req,res)=>{
    res.send("嗨嗨 測試");
})

app.listen(portNum,()=>{
    console.log('server is running at', portNum);
})