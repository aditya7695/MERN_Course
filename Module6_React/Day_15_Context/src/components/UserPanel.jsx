import { useContext } from "react"
import { UserContext } from "../context/userContext.js"
import { ThemeContext } from "../context/themeContext.js"


const UserPanel = () => {

  const {theme , toogleTheme} = useContext(ThemeContext)

  const userName = useContext(UserContext)
  return (
    <div>
      <h1>Welcome , {userName} 👋👋 </h1>
      <h1>{theme}</h1>
      <button onClick={toogleTheme}>Toogle theme</button>
      
    </div>
  )
}

export default UserPanel
