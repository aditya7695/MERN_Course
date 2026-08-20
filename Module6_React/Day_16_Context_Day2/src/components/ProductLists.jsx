import { useEffect, useState } from "react"
import axios from "axios"


const ProductLists = () => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState("");

    useEffect(()=>{
        const fetchData = async() =>{
            setError("");
            try {
                const res = await axios.get("https://dummyjson.com/products");
                setData(res.data.products)
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    })

  return (
    <div>
        {loading && <h1>Loading....</h1>}
        {error && <h1>{error}</h1>}
        <select name="dropdown" id="dropdown">
            <option value="asc">asc</option>
            <option value="dsc">dsc</option>
        </select>
        {data.map(item => {
            return <div key={item.id}>
                <span>{item.title}</span> - <span>{item.price}</span>
            </div>
        })}
      <div>

      </div>
    </div>
  )
}

export default ProductLists
