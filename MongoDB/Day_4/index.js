import express from "express"

import 'dotenv/config'
import connectdb from "./db.js"

const PORT = process.env.PORT;

const app = express();
connectdb()

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send("API is working")
})