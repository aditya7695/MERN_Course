import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"



const App = () => {

  const [data , setData] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const res = await axios.get("http://localhost:3000/movies")
      setData(res.data)
      // console.log(data)
    }
    fetchData()
  },[])



  return (
    <div>
      <ul>
        {data.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    </div>
  )
}

export default App
