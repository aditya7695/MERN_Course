import { useState } from "react"
import Counter from "./components/Counter"
import Test from "./components/Test"
import Timer from "./components/Timer"
import Logs from "./components/Logs"





const App = () => {
  const [toogle , setToggle] = useState(true)
  return (
    <div>
      <Test/>
      <Counter/>
      <Logs/>
      {toogle && <Timer/>}
      <button onClick={()=>setToggle(prev => !prev)}>Toggle</button>
      
    </div>
  )
}

export default App
