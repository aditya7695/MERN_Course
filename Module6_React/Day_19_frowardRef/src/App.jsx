import { useRef } from "react"


const App = () => {

  const h1Ref = useRef(null);
  const inputRef = useRef(null);

  return (
    <div>
      <h1 ref={h1Ref}>Hello this is h1</h1>
      <button onClick={()=>{
        h1Ref.current.style.color = 'red';
        inputRef.current.focus();
        h1Ref.current.textContent = 'Button is Clicked'
      }}>Click</button>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
