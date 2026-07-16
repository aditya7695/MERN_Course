import { useState } from "react";



const Counter = () => {

const [count , setCount] = useState(0);

console.log("Render phase : count value " , count )

const handleClick = () =>{
    console.log("Before setcount " , count)
    setCount(count + 1);
    console.log("After setCount " , count)

}
  return (
    <div>
         <h1>Count : {count}</h1>   
         <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default Counter


/* outPut : 
Before setcount  0
After setCount  0
 Render phasev : count value  1
 Before setcount  1
 After setCount  1
 Render phasev : count value  2
 Before setcount  2
 After setCount  2
 Render phasev : count value  3
 Before setcount  3
 After setCount  3
 Render phasev : count value  4 */

//  in react , state updates or not immediate
// when you call a setState , you are scheduling an update for the next year
// Inside your current render , the state values dont change 
// if you log tghe value inside the event handler you will always get the same value