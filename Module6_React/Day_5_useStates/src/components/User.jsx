import { useState } from "react"

const User = () => {
    const [student , setStudent] = useState({name : 'Aditya' , age : 20 , city : "Mumbai" , marks : 50})
    const handleClickCity = ()=>{
        setStudent((prev) => ({...prev , city : "Pune"}))
    }
    const handleClickMarks =()=>{
        setStudent((prev) => ({...prev , marks : prev.marks+20}))
    }
  return (
    <div>
      <h2>Name : {student.name}</h2>
      <h2>Age : {student.age}</h2>
      <h2>City : {student.city}</h2>
      <h2>Marks : {student.marks}</h2>

      <button onClick={handleClickCity}>Update City to pune</button>
      <button onClick={handleClickMarks}>Increase marks by 20</button>
    </div>
  )
}

export default User
