import { useRef } from "react"
import Child from "./Child"


const App = () => {
  const iRef = useRef(null);
  const hRef = useRef(null);

  const finalRef = {
    iRef : iRef,
    hRef : hRef
  }
  return (
    <div>
      <h1>Learning Forward ref</h1>
      <Child 
      name = {"Aditya"}
      ref = {finalRef}
      />
      <button 
       onClick={()=>{
        iRef.current.value = "This is the text input";
        iRef.current.focus();
        hRef.current.style.color = 'red';
       }} >Click</button>
    </div>
  )
}

export default App
