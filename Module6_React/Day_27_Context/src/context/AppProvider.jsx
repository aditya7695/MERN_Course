import { useState } from "react";
import { themeContext } from "./themeContext";
import { userContext } from "./userContext";



const AppProvider = ({children}) => {
 const username = "Aish"
  const [theme , setTheme] = useState("Light")

  const toggleTheme = () => {
    setTheme((prev) => prev == "Light" ? "Dark" : "Light")
  }
  return (
    <userContext.Provider value={username}>
      <themeContext.Provider value={{theme , toggleTheme}}>
            {children}
      </themeContext.Provider>
    </userContext.Provider>
  )
}

export default AppProvider
