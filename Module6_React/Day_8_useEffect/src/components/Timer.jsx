import { useEffect, useState } from "react";

const Timer = () => {

    const [count , setCount] = useState(0)

    useEffect (()=>{

       let timerId =  setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000);

        return ()=>{
            clearInterval(timerId)
        }
    },[])
  return (
    <div>
      <h1>Timer : {count} </h1>
    </div>
  )
}

export default Timer
