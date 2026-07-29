import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router"

const Home = () => {
    const [data , setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const info = await res.json();
            setData(info);
        }
        fetchData();
    },[])
    data.map(item => {
      localStorage.setItem(item.id, JSON.stringify(item) )
    })


// localStorage.setItem('data' , allData)


   let set = new Set()
   data.map((item) => set.add(item.userId));
  return (
    <div>
      {Array.from(set).map((item => <button key={item} onClick={()=>navigate(`posts?userid=${item}`)}>{item}</button>))}
    </div>
  )
}

export default Home
