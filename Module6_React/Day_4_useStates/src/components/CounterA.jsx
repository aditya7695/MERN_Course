import { useState } from "react"


const CounterA = () => {
    const [count , setCount] = useState(0)
  return (
    <div>
      <h1>Counter A : {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <button onClick={()=> setCount(count - 1)}>Deacrese</button>
    </div>
  )
}

export default CounterA
