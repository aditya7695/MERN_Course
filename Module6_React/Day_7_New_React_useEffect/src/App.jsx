// useEffects allows us to perform side effects in your components
// dataFectching
// calculations
// 

import { useEffect, useState } from "react"

const App = () => {
  const [count , setCount] = useState(0)
  const [count1 , setCount1] = useState(0)

  useEffect (()=>{
    console.log("useEffect is running " , count)
  },[count])
  return (
    <div>
      <button onClick={()=>setCount(prev => prev + 1)} >Count : {count}</button>
      <button onClick={()=>setCount1(prev => prev + 1)}> Count 1 : {count1}</button>
    </div>
  )
}

export default App
