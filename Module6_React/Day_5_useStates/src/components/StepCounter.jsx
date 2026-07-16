import { useState } from "react"
const StepCounter = () => {
 const [count , setCount] = useState(0)
const [steps, setState] = useState(0)
 const handleClickIncrease = ()=>{
   setCount((prev) => prev + steps)
 }
 const handleClickDeacrese = () =>{
    setCount((prev) => prev - steps)
 }
  return (
    <div>
      <h1>Count : {count}</h1>
      <input type="number" placeholder="enter number of steps" onChange={(e)=>{setState(Number(e.target.value))}}/>
      <button onClick={handleClickIncrease}>Increase</button>
      <button onClick={handleClickDeacrese}>deacrese</button>
    </div>
  )
}

export default StepCounter
