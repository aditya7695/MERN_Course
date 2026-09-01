import { useRef, useState } from "react"
import Child from "./Child"
// import ErrorBoundary from "./ErrorBoundary"

import {useDispatcher , useSelector} from 'react-redux'

const App = () => {
  const [boys ] = useState([
    {id : 1 , name : "Aditya" },
    {id : 2 , name : "Ashish" }
  ])
  const [girls ] = useState([
    {id : 1 , name : "Aish" },
    {id : 2 , name : "Tanu" }
  ])

  const bhref = useRef(null)
  const ghref = useRef(null)

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={()=>{
        bhref.current.style.color = 'blue';
        ghref.current.style.color = 'red';
      }}> Click </button>
      {/* <ErrorBoundary> */}

      <Child
      heading = {"Boys"}
      list = {boys}
      ref = {bhref}
      />
      {/* </ErrorBoundary> */}
      {/* <ErrorBoundary> */}

      <Child
      heading = {"Girls"}
      list = {girls}
      ref = {ghref}
      />
      {/* </ErrorBoundary> */}
    </div>
  )
}

export default App
