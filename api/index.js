import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
//need .js for files, don't need it for libraries
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";

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
});

//endpoints interpreted by express; request from user then response to request
app.get("/", (req, res)=>{
    res.send("hello first request")
});

//middlewares (imported endpoints)
//allows the information to be sent in json format from the body
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//next will run all the other routes that gets invoked then run 'next' in line. You need to include return functions in the endpoints that use next() functions if this is last. if this is first in line, then it's not looking for a return statement. 
//if any error occurs in any API request, we can handle 
app.use((error, req, res, next)=>{
    const errorStatus = error.status || 500
    const errorMessage = error.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack,        
    });
    // next()
})


// connect to port, then confirm connection by calling connect() function
app.listen(process.env.PORT, ()=>{
// app.listen(8000, ()=>{
    connect()
    console.log("Connected to backend");
});

//to have npm start start nodemon, install nodemon (npm i nodemon) & edit "scripts": {"start": "nodemon index.js"}, 