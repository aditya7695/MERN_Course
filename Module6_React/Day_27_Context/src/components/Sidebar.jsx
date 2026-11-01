import { useContext } from "react"
import { userContext } from "../context/userContext"



const Sidebar = () => {
    const username = useContext(userContext)
  return (
    <div>

<h1>Sidebar : {username}</h1>
      
    </div>
  )
}

export default Sidebar
