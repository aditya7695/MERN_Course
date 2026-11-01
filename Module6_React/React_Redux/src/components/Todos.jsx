import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createTodo, editTodo } from "../redux/todoActins"


const Todos = () => {
    const dispatch = useDispatch()
    const {todo} = useSelector(state => state)
    const [taskInput , setTaskInput] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createTodo(taskInput))
    }

  return (
    <div>
    
    <form action="">
        <input type="text" placeholder="Enter Task" onChange={(e)=>setTaskInput(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Add Task</button>
    </form>
    

      <ul>
        {todo.map((items) => <li key={items.id}>
                {items.task} <button onClick={
                  ()=> dispatch(editTodo({id : items.id , updatedTask : taskInput}))
                  }>Edit todos</button>
        </li> )}
      </ul>
    </div>
  )
}

export default Todos
