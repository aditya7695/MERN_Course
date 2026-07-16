import { useState } from "react"


const NameInput = () => {
    const [name , setName] = useState("")
    const [users , setUsers] = useState([])

    const handleClick = () =>{
        setUsers([...users,name])
    }
  return (
    <div>
      <input type="text" 
      placeholder="Input name"
      onChange={(e)=>setName(e.target.value)}/>
      
       <button onClick={handleClick}>Add Name</button> 
      <ul>
        {users.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default NameInput
