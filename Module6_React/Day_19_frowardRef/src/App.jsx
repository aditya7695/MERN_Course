import { useRef } from "react"
import Child from "./Child";


const App = () => {

  const iRef = useRef(null);

  return (
    <div>
      <h1>Title</h1>

      <Child 
      ref={iRef}
      name={"Aditya"}/>

      <button
      onClick={()=>{
        iRef.current.focus();
        iRef.current.value = "Aditya Ubale"
      }} >Click</button>
    </div>
  )
}

export default App
