import { lazy, Suspense, useRef, useState } from "react"
const Child = lazy(()=> {
  
  const result = new Promise(
    (resolve) => {
      setTimeout(()=>{
        console.log("We are rendering the Child component")
        resolve(import ('./Child'))
      },5000)
  })
  return result;
  })


const App = () => {
  const iRef = useRef(null);
  const hRef = useRef(null);
  const [show , setShow] = useState(false)

  const finalRef = {
    iRef : iRef,
    hRef : hRef
  }
  return (
    <div>
      <h1>Learning Forward ref</h1>
      {
        show && 
       (< Suspense fallback = {<p>Loading child component ... </p>} >

          <Child 
      name = {"Aditya"}
      ref = {finalRef}
      />
       </Suspense>
       )
      }
    
      <button 
       onClick={()=>{
        // iRef.current.value = "This is the text input";
        // iRef.current.focus();
        // hRef.current.style.color = 'red';
        setShow(!show);
       }} >Click</button>
    </div>
  )
}

export default App
