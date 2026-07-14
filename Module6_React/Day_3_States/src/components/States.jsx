import { useState } from "react"

const States = () => {
    console.log("State Component is rendering")

    const [count , setCount] = useState(0)

    const handlIncrease = () =>{
        setCount(count + 1)
    }
    const handleDecrese = () =>{
        setCount(count - 1)
    }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handlIncrease}>Increase</button>
      <button onClick={handleDecrese}>Deacrese</button>
    </div>
  )
}

export default States
