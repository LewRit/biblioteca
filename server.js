require("dotenv").config();
const express=require("express");
const app=express()
const bodyParser=require("body-parser")
const fetch=require('node-fetch')
const session =require("express-session")
const passport= require("passport")

// require API
const apiMain=require('./routes/main')
const apiHeartbeat=require('./routes/apiHeartbeat')
const apiBooks=require('./routes/apiBooks')
// const GitHubStrategy = require('passport-github').Strategy;

// connect to front end
app.use("/", express.static(__dirname + "/public"))
app.use("/js", express.static(__dirname + "/js"))
app.use("/css", express.static(__dirname + "/css"))

// able to decipher objects
app.use(bodyParser.json())

// connect to API
app.use('/api/home', apiMain);
app.use('/api/heartbeat', apiHeartbeat);
app.use('/api/books', apiBooks);



app.listen(process.env.PORT,()=>{
    console.log('The server is running at port 3001')
})