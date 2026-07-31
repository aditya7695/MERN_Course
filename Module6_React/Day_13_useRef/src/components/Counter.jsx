import { useRef, useState } from "react"

const Counter = () => {
  const ref = useRef(0)
    const [count , setCount] = useState(0)
  
    const increaseRef = () =>{
      ref.current = ref.current + 1;
      console.log(ref)
    }
    return (
      <div>
        <h1>Count. : {count}</h1>
        <h3>Ref value : {ref.current}</h3>
        <button onClick={increaseRef}>Increase Ref Value</button>
        <button onClick={()=> setCount(prev => prev + 1)}>Increase Count</button>
      </div>
    )
}

export default Counter
