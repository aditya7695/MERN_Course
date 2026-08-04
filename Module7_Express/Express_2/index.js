import express from "express"


const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT , ()=>{
console.log(`Server is running on ${PORT}`);
})

const movies = [
    {id : 1 , title : "Inception" , genere : "sci-fi" , watched : "true"},
    {id : 2 , title : "Interstellar" , genere : "sci-fi" , watched : "true"},
    {id : 3 , title : "Zone" , genere : "drama" , watched : "true"},
    {id : 4 , title : "Koi mil gaya" , genere : "sci-fi" , watched : "true"},
]

app.get('/movies/:genere',(req , res)=>{
 const{genere} = req.params
movies.map(item => {
    if(item.genere == genere){
        res.json({item})
    }
}) 
})
const adminMail = "admin@gmail.com"
const adminPassword = "adminPassword"

app.post('/login',(req,res)=>{

    const {email} = req.bod
    const {password} = req.body

    if(!password.trim()){
        res.json({message : "Password is empty"})
    }
    if(!email.trim()){
        res.json({message : "email is empty"})
    }

    if(email == adminMail && password == adminPassword){
        res.status(202).json({message : "Admin login successful"})
    }else{
        res.status(400).json({message:"Wromg credentials"})
    }
    
})


app.post('/movies',(req,res)=>{

    const Obj = {
        id : movies.length+1,
        title : req.body.title,
        genere : req.body.genere,
        watched : req.body.watched
    }

    movies.push(Obj)

    res.json(movies)
    
})


app.get("/getmovies/:id",(req,res)=>{
    const {id} = req.params
    const movie = movies.find(item => item.id == id)
    if(!movie){
        res.status(404).json({message:"Movie not found"})
    }else{
        res.status(202).json(movie.title)
    }
})