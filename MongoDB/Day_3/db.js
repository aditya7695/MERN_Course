
import mongoose from "mongoose";

const testschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    }

});

const Test = mongoose.model("Test",testschema)



const conncetdb = async() => {
    try{
    mongoose.connection.on('connected',()=>{
        console.log('DB is connected')
    })
    await mongoose.connect(`${process.env.MONGO_URL}/test`)

    // const result = await Test.create({
    //     name : "Aditya",
    //     age:22,
    //     address:"asdfghjkl"
    // })'

    const result = await Test.updateOne({name : "Aditya"},{
        $set:{
            age : 99,
            address : "Pune"
        }
    })

    console.log(result)

   
}catch(err){
    console.log(err.message)
}
}

export default conncetdb;