import { useContext } from "react"
import { userContext } from "../context/userContext"
import { themeContext } from "../context/themeContext"



const Userpanel = () => {
    const username = useContext(userContext)
    const {theme , toggleTheme} = useContext(themeContext)

  return (
    <div>
      <h1>Username : {username}</h1>
      <h3>Theme : {theme}</h3>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default Userpanel
