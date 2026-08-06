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

app.get("/movies",(req,res)=>{
    res.send("Hello")
})

// app.get("/getmovies/:id",(req,res)=>{
//     const {id} = req.params
//     const movie = movies.find(item => item.id == id)
//     if(!movie){
//         res.status(404).json({message:"Movie not found"})
//     }else{
//         res.status(202).json(movie.title)
//     }
// })

// note : if the routes are the same remember to keep the methods different , if both are same then the 
// 1st route which is created only hits



// getting particular details about a whole and updating that movie

// app.patch("/movies/:id",(req,res)=>{
//     const {id} = req.params;
//     const {watched,title,genere} = req.body;

//     const searchMovie = movies.find(item => item.id == id)
//     if(!searchMovie){
//         res.status(404)
//     }

//     if(watched !== undefined){
//         searchMovie.watched = watched;
//     }
//     if(title !== undefined){
//         searchMovie.title = title;
//     }
//     if(genere !== undefined){
//         searchMovie.genere = genere;
//     }

//     console.log(searchMovie)

//     const index = movies.findIndex(m => m.id == id)

//     movies[index] = searchMovie

//     res.json(movies)
// })


app.put("/movies/:id",(req,res)=>{
    const {id} = req.params;
    const {watched,title,genere} = req.body;

    const searchMovie = movies.find(item => item.id == id)
    if(!searchMovie){
        res.status(404).send("Movie not found")
    }

    console.log(searchMovie)

    const index = movies.findIndex(m => m.id == id)

    const updateMovie = {
        id : Number(id) , title , genere , watched
    }

    movies[index] = updateMovie

    res.json(movies)
})

app.delete("/movies/:id",(req,res)=>{
    const {id} = req.params;
    const searchMovie = movies.find(item => item.id == id)
    if(!searchMovie){
        res.status(404).send("Movie not found")
    }
    const index = movies.findIndex(m => m.id == id)
    movies.splice(index,1)
    res.json(movies)
})

const todos = [
    {id : 100 , task : "todo1" , completed : false},
    {id : 101 , task : "todo2" , completed : false},
    {id : 102 , task : "todo3" , completed : false},
    {id : 103 , task : "todo4" , completed : false},
   ]


// implement the below routes 

// get all todos

app.get("/todo",(req,res)=>{
    res.json(todos)
})

// create a todo
app.post("/todo",(req,res)=>{
    const {id , task , completed} = req.body
    const Obj = {
        id : todos.length+100 , task , completed
    }
    todos.push(Obj);

    res.json(todos)

})

// toggle completed
app.patch("/todo/toggle-completed/:id",(req,res)=>{
    const {id} = req.params;

    const searchTodo = todos.find(item => item.id == id)

    console.log(searchTodo)

    if(searchTodo.completed == true){
        searchTodo.completed = false
    }else{
        searchTodo.completed = true
    }

    res.json(todos)
})

// edit todo

app.put("/todo/:id",(req,res)=>{
  const {id} = req.params;
  const {task , completed} = req.body

  const searchTodo = todos.find(item => item.id == id)

  searchTodo.task = task;

  searchTodo.completed = completed;

  const index = todos.findIndex(t => t.id == id)

  todos[index] = searchTodo;

  res.json(todos)
  
})


// delete todo

app.delete("/todo/:id",(req,res)=>{
    const {id} = req.params

    const index = todos.findIndex(item => item.id == id)

    todos.splice(index,1)

    res.json(todos)
})