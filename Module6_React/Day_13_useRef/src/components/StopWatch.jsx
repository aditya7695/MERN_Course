import { useRef, useState } from "react";


const StopWatch = () => {
     const [count , setCount] = useState(0)
    const timerId = useRef(null);
     const startTimer = () =>
     {
        if(timerId.current !== null) return
        timerId.current = setInterval(() => {
                setCount((prev) => prev + 1)
         }, 1000);
     }
     const stopTimer = () =>{
        clearInterval(timerId.current);
        timerId.current = null;
     }

     const resetTimer = () =>{
        setCount(0)
     }
  return (
    <div>
      <h1>Timer : {count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default StopWatch
