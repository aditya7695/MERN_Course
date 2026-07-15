import { useState } from "react"



const CounterB = () => {
    
    const[count , setCount] = useState(()=>{
        console.log("runs initial render")
        return 0;
    })
    console.log("Counter B Is rendering")
  return (
    <div>
        <h1>Counter B : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Deacrese</button>      
    </div>
  )
}

export default CounterB
