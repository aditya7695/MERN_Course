import { useState } from "react"
import CounterB from "./CounterB"
import CounterC from "./CounterC"



const CounterA = () => {
    const [count , setCount] = useState(0)
  return (
    <div>
        <CounterB count={count} setCount={setCount}/>
        <CounterC count={count} setCount={setCount}/>
    </div>
  )
}

export default CounterA
