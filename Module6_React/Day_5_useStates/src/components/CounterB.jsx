// import { useState } from "react";

// const CounterB = () => {const [count , setCount] = useState(0);

// console.log("Render phasev : count value " , count )

// const handleClick = () =>{
    
//     setCount(count + 1);
//     console.log("After setCount(count + 1) " , count)
//     setCount(count + 5);
//     console.log("After setCount(count + 5) " , count)
//     setCount(count + 10);
//     console.log("After setCount(count + 10) " , count)

// }
//   return (
//     <div>
//          <h1>Counter B : {count}</h1>   
//          <button onClick={handleClick}>Increase</button>
//     </div>
//   )
// }

// export default CounterB



// Out Put 
// After setCount(count + 1)  0
// After setCount(count + 5)  0
// After setCount(count + 10)  0
// Render phasev : count value  10


//  Note

/* 
as we can see raect does not allows us to directly update the satete multiple times in the same handler 
this is done so that the amount of component rerenders could be limited f0r better optimization 


but what happens when we wqant to update the satet multiple times -> to solve this the setSate function 
has an argument that keeps track of previous values
*/



import { useState } from "react";

const CounterB = () => {
    const [count , setCount] = useState(0);
    const [name , setName] = useState(0);
    const [isActive , setIsActive] = useState(0);

console.log("Render phase complete" )

const handleClick = () =>{
    
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 5);
    setCount((prev) => prev + 10);
    setName("Aditya")
    setIsActive(true)

}
  return (
    <div>
         <h1>Counter B : {count}</h1>   
         <h2>Name : {name}</h2>
         <h2>Active : {isActive ? "yes" : "No" }</h2>
         <button onClick={handleClick}>update all values</button>
    </div>
  )
}
export default CounterB

