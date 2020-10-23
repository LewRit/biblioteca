require("dotenv").config();
const express=require("express");
const app=express()
const bodyParser=require("body-parser")
const session =require("express-session")
const passport= require("passport")
const apiMain=require('./routes/main')
// const GitHubStrategy = require('passport-github').Strategy;

app.use("/", express.static(__dirname + "/public"))
app.use("/js", express.static(__dirname + "/js"))
app.use("/css", express.static(__dirname + "/css"))
app.use('/', apiMain);
// app.use(bodyParser.json())

app.get('/heartbeat',(req,res)=>{
    res.send("Hello World")
})

app.listen(process.env.PORT,()=>{
    console.log('The server is running at port 3001')
})