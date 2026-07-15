import { useState } from "react"


const Users = () => {
    const [users,setUsers] = useState([])
    const [name,setName] = useState("")
    const [age,setAge] = useState(null)

    const handleClick = () =>{
        let Obj = {}
       if (!name.trim()) {
         return;
       } else {
         Obj.name = name;
       }
       if (!age.trim() || age < 18) {
         return;
       } else {
         Obj.age = age;
       }
        setUsers([...users,Obj])
    }

  return (
    <div>
      <input type="text"
      placeholder="enter name" 
      onChange={(e)=>setName(e.target.value)}/>
      <input type="text"
      placeholder="enter age"
      onChange={(e)=>setAge(e.target.value)} />

      <button onClick={handleClick}>Add Users</button>
      {
        users.map((item,index)=> <li key={index}>Name : {item.name} , Age : {item.age}</li>)
      }
    </div>
  )
}

export default Users
