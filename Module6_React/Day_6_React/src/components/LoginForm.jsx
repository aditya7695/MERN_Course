import { useState } from "react"



const LoginForm = () => {
    const [formData , setFromData] = useState({email : '' , password : ''})
    // function getEmail(e){
    //     setFromData((prev) => ({...prev , email : e.target.value}))
    // }
    // function getPassword(e){
    //     setFromData((prev) => ({...prev , password : e.target.value}))
    // }
    function handleChange(e){

        const value = e.target.value;
        const name = e.target.name;

        setFromData((prev) => ({...prev , [name] : value}))

    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("student details " , formData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange}/>
        <input type="password" name="password" placeholder="Enter password" onChange={handleChange}/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default LoginForm
