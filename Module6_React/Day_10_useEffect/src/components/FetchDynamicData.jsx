import { useEffect, useState } from "react"


const FetchDynamicData = () => {
    const [userId , setUserId] = useState(1)
    const API = `https://jsonplaceholder.typicode.com/users/${userId}`
    const [data , setData] = useState({})
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(()=>{
        return () =>{
            const fetchData = async()=>{
              setLoading(true)
              setError(null)
              try {
                  const res = await fetch(API);
                  const info = await res.json();
                  setData(info)
              } catch (error) {
                  setError(error.message)
              }finally{
                  setLoading(false)
              }
            }
            fetchData()
        }
    },[userId])

    if(loading) return <h1>Loading ... </h1> 
    if(error) return <h1>{error}</h1> 
  return (
    <div>
      <input type="text" placeholder="enter user id" onChange={(e) => setUserId(e.target.value)}/>
      <h1>User id : {data.id} , UserName : {data.name}</h1>
    </div>
  )
}

export default FetchDynamicData
