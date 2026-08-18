import express from "express";
import connectDB from "./db.js";
import 'dotenv/config'


const app = express();
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send("API is working")
})