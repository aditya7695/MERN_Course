import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [todos , setTodos] = useState([])
  const [task , setTask] = useState("");

  useEffect(()=>{
    async function fetctData(){
      const res = await axios.get("http://localhost:3000/todo")
      console.log(res.data.data)
      setTodos(res.data.data)
    }
    fetctData()
  },[])

  const addTodo = (e) =>{
    e.preventDefault()
    if(task.trim() === ""){
      return
    }
    axios.post("http://localhost:3000/todo",{
      task : task,
    completed : false
  }).then((res)=>{
    setTodos([...todos , res.data.data]);
    setTask("");
  })
  }

  const editTodo = (todo) => {
    const newTask = prompt("Enter new task", todo.task);
    if(newTask === ""){
      return
    }
    axios.put(`http://localhost:3000/todo/${todo.id}`,{
      task : newTask
    }).then((res)=>{
      const updateTodo = res.data.data;
      setTodos(todos.map((currentTodo) => {
        if(currentTodo.id == todo.id){
          return updateTodo
        }else{
          return currentTodo
        }
      }))
    })


  }

  const deleteTodo = (todo) => {
    axios.delete(`http://localhost:3000/todo/${todo.id}`)
    .then((res)=>{
      const updatedTodos = res.data.data
      setTodos(todos.filter((item) => {
        if(item.id !== todo.id){
          return updatedTodos
        }
      }))
    })
  }



  return (
    <div>
      <h1>TODO App</h1>
      <form action="" onSubmit={addTodo}>
        <input type="text" placeholder="Enter Todo" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button type="submit">Add todo</button>
      </form>
      
      {todos.length > 0 && todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly/>
          <span style={
            {
              textDecoration : todo.completed ? "line-through" : "none",
              marginRight : "20px"
            }
          }>{todo.task}</span>
          <button onClick={()=>editTodo(todo)}>Edit</button> 
          <button onClick={()=>deleteTodo(todo)}>Delete</button> 
        </div>
      ))}
      
    </div>
  )
}

export default App
