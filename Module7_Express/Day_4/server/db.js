import mongoose from "mongoose";

const connectDB = async() =>{
    try{
        mongoose.connection.on("connected" , ()=>{
            console.log("DB is connected")
        })
        await mongoose.connect(`${process.env.MONGO_URL}/todo`);
    }catch(err){
        console.log(err.message)
    }
}


export default connectDB;