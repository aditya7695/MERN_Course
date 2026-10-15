import mongoose from "mongoose";

const connectdb = async() => {
    try {

        mongoose.connection.on('connected',()=>{
            console.log("DB is connected")
        })

        await mongoose.connect(`${process.env.MONGO_URL}/test`)
        
    } catch (error) {
        console.log(error.message)
    }
}

export default connectdb;