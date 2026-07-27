import { useEffect, useState } from "react"


const FetchingProducts = () => {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(()=>{
        const fetchData = async() =>{
            setLoading(true)
            setError(null)
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const info = await res.json();
                setData(info);
            } catch (error) {
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if(loading) return <h1>Loading....</h1>

    if(error) return <h1>{error}</h1>
  return (
    <div>
      <ul>
        {data.map(item => <li key={item.id}>Title is : {item.title} , Price is : {item.price}</li>)}
      </ul>
    </div>
  )
}

export default FetchingProducts
