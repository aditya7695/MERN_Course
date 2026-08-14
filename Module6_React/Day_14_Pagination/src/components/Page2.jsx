import { useEffect, useState } from "react"
import axios from "axios"


const Page2 = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts"
  const [data , setData] = useState([]);
  const [currentPage , setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(()=>{
    const fetchData = async() => {
      const res = await axios.get(API_URL);
      setData(res.data)
    }
    fetchData()
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentData = data.slice(indexOfFirstPost,indexOfLastPost)
  
  const totalPages = Math.ceil(data.length / postsPerPage)

  const handlePrev = ()=>{
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  };
  const handleNext = ()=>{
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <div>
      {currentData.map(item => {
        return( <div key={item.id}>
          <h3>User ID : {item.userId}</h3>
          <h3>Title : {item.title}</h3>
          <p>Body : {item.body}</p>
        </div> )
      })}

      <div style={{padding : "20px" ,display : "flex" , justifyContent : "center" , alignItems : "center" , gap : "10px" , position : "sticky"}}>
      <button 
      onClick={handlePrev}
      disabled = {currentPage === 1}
      style={{padding : "8px 16px" , cursor : currentPage === 1 ? "not-allowed" : "pointer"}}
      >
        Previous
      </button>

      <span style={{fontWeight : "bold"}}>Page {currentPage} of {totalPages}</span>

      <button 
      onClick={handleNext}
      disabled = {currentPage === totalPages || totalPages === 0}
      style={{padding : "8px 16px" , cursor : currentPage === totalPages ? "not-allowed" : "pointer"}}
      >
      Next
      </button>
      </div>
    </div>
  )
}

export default Page2
