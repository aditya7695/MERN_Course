import { useRef } from "react";
import Button from "./Button"



const Child = () => {
    let textadd = useRef();
    const handleChildClick = () =>{
        useRef.current = "To react";
    }
  return (
    <div>
       {<h1>Welcome {textadd}</h1>}
      <Button text={"Child Button "} clickEvent={handleChildClick}/>
    </div>
  )
}

export default Child
