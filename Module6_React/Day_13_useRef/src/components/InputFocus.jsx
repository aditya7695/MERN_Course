import { useEffect, useRef, useState } from "react"

const InputFocus = () => {
    const inputRef = useRef(null)

    const [city , setCity] = useState("Mumbai")
    console.log("Componrnt4gresfnklm")

    const cityRef = useRef(null)

    const changeCity = () => {
        cityRef.current.textContent = "Pune"
    }
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus Here..."/>

      <h2>city : {city}</h2>
      <h2 ref={cityRef}>Mumbai</h2>
      <button onClick={()=> setCity("Pune")}>Change City</button>
      <button onClick={changeCity}>Change City Ref</button>
    </div>
  )
}

export default InputFocus
