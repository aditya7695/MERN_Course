import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./redux/postActions"
import { useEffect } from "react"



const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPosts())
  },[])
  
  const {posts,loading ,error} = useSelector(state => state)
  console.log(posts)

  return (
    <div>
      <h1>Posts </h1>
      <ul>
        {loading ? <h1>loading...</h1> : posts.map((items) => <li key={items.id}><h1>Title : {items.title}</h1>  Body : {items.body}</li>)}
        {error ? <h1>{error}</h1> : ""}
        {}
      </ul>

    </div>
  )
}

export default App
