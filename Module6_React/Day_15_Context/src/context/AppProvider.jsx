import { useState } from "react";
import { ThemeContext } from "./themeContext"
import { UserContext } from "./userContext"



const AppProvider = ({children}) => {
    const userName = "Aditya"
      const [theme , setTheme] = useState("light");
    
      const toogleTheme = () => {
        setTheme((prev)=> prev == 'light' ? 'dark' : 'light')
      }
  return (
    <div>
      <UserContext.Provider value={userName}>
      <ThemeContext.Provider value={{theme,toogleTheme}}>
            {children}
      </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default AppProvider
