import { useEffect, useState } from "react"


const Logs = () => {
    const [count , setCount] = useState(0)

    console.log("Rendering count : " , count)

    useEffect(()=>{

        console.log("Effect Rendering, count : " ,count)

        return()=>{
            console.log("Cleanup rendering , count : ",count)
        }
    },[count])

    console.log("Rendering complete , count : ",count)
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default Logs
