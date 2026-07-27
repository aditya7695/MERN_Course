import { useEffect, useState } from "react"


const FetchData = () => {
 
    const [posts , setPosts] = useState([])
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    // using .then
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => setPosts(data))
    // },[])


    // using async await
    // useEffect(()=>{
    //     const fetchPosts = async() =>{
    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    //         const data = await res.json();
    //         setPosts(data)
    //     }
    //     fetchPosts();
    // },[])




    // loading , fetch and error states

    useEffect(()=>{
        const fetchPosts = async()=>{
            setLoading(true)
            setError(null)
            try{
                const res = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await res.json();
                setPosts(data)
            }
            catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchPosts();
    },[])

    if(loading) return <h1>Loading.....</h1>

    if(error) return <h1>{error}</h1>
  return (
    <div>
      <ul>
        {posts.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  )
}

export default FetchData
