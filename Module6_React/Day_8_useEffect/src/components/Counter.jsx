import {  useEffect, useState } from "react"

const Counter = () => {
    const [count , setCount] = useState(0)
    const [count2 , setCount2] = useState(0)

    // Note : do not forget to specify the dependenchy array in useEffect , bc that is what determines how sideEffects are performed

    // useEffect(()=>{
    //     console.log("Hello")
    // },[count,count2])


    // LifeCycle Methods 

    // componentDidMount
    // useEffect(()=>{
    //     console.log("Performing this when component is getting Mounted")
    // },[])

    // ComponentDidUpdate
    // useEffect(()=>{
    //     console.log("Performing this when component is getting Updated")
    // },[count])

    // componentWillUnmount
    useEffect(()=>{

        return()=>{
            console.log("performing this when component is removed")
        }
        
    },[])
  return (
    <div>

        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(prev => prev + 1)}>Increase</button>
        <h1>Count 2 : {count2}</h1>
        <button onClick={()=>setCount2(prev => prev + 1)}>Increase</button>
      
    </div>
  )
}

export default Counter
