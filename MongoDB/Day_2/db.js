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
    course : {
        type : String,
        required : true
    }
})

const Test = mongoose.model("Test",testschema);


const connectDB = async () => {
    try{
        mongoose.connection.on('connected',()=>{
            console.log("DB is connected")
        })
        await mongoose.connect(`${process.env.MONGO_URL}/test`)

        // const result = await Test.create({
        //     name : "Aditya",
        //     age : 22,
        //     course : "Test Course"
        // })

        // const result = await Test.insertMany([
        //     {name : "Prajwal" , age : 24 , course : "Mern"},
        //     {name : "Pranav" , age : 25 , course : "Java"},
        //     {name : "Pritesh" , age : 24 , course : "Mern"},
        //     {name : "Aish" , age : 25 , course : "C++"},
        //     {name : "Ashish" , age : 22 , course : "Java"}
        // ])

        // console.log(result)

        // console.log(await Test.find({course : "Java"}));

        // console.log(await Test.find({
        //     age : {
        //         $gte : 24
        //     }
        // }));

        // console.log(await Test.find({}).sort({age : 1}));

        // const result  = await Test.updateOne(
        //     {name : "Pritesh"},{
        //         $set : {
        //             age : 22,
        //             course : "MCA"
        //         }
        //     })

        const result = await Test.deleteOne({_id : "6a7ead50e2fbfe31459fd179"})
        console.log(result)


    }
    catch(err){
        console.log(err.message)
    }
}




export default connectDB;
