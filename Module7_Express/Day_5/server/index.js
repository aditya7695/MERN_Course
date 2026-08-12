import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({
    origin : "http://localhost:5173"
}))

app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT}`)
})

const movies = [
    {id : 1 , title : "Inception" , genere : "sci-fi" , watched : "true"},
    {id : 2 , title : "Interstellar" , genere : "sci-fi" , watched : "true"},
    {id : 3 , title : "Zone" , genere : "drama" , watched : "true"},
    {id : 4 , title : "Koi mil gaya" , genere : "sci-fi" , watched : "true"},
]

app.get("/movies",(req,res)=>{
    res.json(movies)
})

app.post("/movies",(req,res)=>{
    const {title , genere , watched=false} = req.body

    if(!title || typeof title !=="string" || title.trim()==""){
        return res.status(400).json({
            message : "Enter Valid Title"
        })
    }

    // if(typeof watched !== Boolean){
    //     return res.status(400).json({
    //         message : "Enter a boolean true or false for watched"
    //     })
    // }

    const newMovie = {
        id : movies.length + 1,
        title,
        genere,
        watched
    }

    movies.push(newMovie);

    res.status(201).json({
        data : movies,
        message : "Movie added successfully"
    }
    )

})