import conncetdb from "./db.js";

import express from "express";

import 'dotenv/config'

const app = express();

conncetdb();

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on ${process.env.PORT}`)
    
})

app.get('/',(req,res)=>{
    res.send("API IS WORKING")
})


