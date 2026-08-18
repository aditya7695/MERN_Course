import { useContext } from "react"
import { UserContext } from "../context/userContext.js"



const SideBar = () => {
    const userName = useContext(UserContext)
  return (
    <div>
      <h1>SideBAr : {userName}</h1>
    </div>
  )
}

export default SideBar
