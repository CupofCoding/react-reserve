import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
// const express = require("express")
//instead of needing the following ^this line, added it to package.json after "main": "...", add '"type": "module",'

const app = express()
dotenv.config()

//https://mongoosejs.com/docs/connections.html; To handle initial connection errors, you should use .catch() or try/catch with async/await.
//make sure the env file has the corrected URI with the password for auth.
const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
  } catch (error) {
    throw error;
  }
};

//mongoose listeners
mongoose.connection.on("disconnected", () =>{
    console.log("MongoDB disconnected!")
})

//endpoints interpreted by express; request from user then response to request
app.get("/", (req, res)=>{
    res.send("hello first request")
})

// connect to port, then confirm connection by calling connect() function
app.listen(process.env.PORT, ()=>{
// app.listen(8000, ()=>{
    connect()
    console.log("Connected to backend");
});

//to have npm start start nodemon, install nodemon (npm i nodemon) & edit "scripts": {"start": "nodemon index.js"}, 