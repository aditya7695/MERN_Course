import { useEffect, useState } from "react"


const Test = ({name = "anpnymus"}) => {
    const [count , setCount] = useState(0);

    // useEffect(()=>{
    //     console.log("Hello")
    // },[name])

    // Note  : never update the same state inside useEffect which is specified in the dependency array
    // the below code will keep running

    useEffect(()=>{
        // setCount(prev => prev + 9999999999999)
    },[count])
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>count : {count}</h1>
      <button onClick={()=>setCount(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default Test
