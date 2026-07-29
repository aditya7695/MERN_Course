import { useEffect } from "react";
import { useState } from "react"
import { useSearchParams } from "react-router";

const Posts = () => {
    const [data , setData] = useState([])
    const [searchParams , setSearchParams] = useSearchParams();

    const Id = searchParams.get('userid')
    console.log(Id)

    const arr = []
    for(let i=1 ; i <= 100 ; i++){
       arr.push(JSON.parse(localStorage.getItem(i)))
    }
    useEffect(()=>{
        setData(arr)
    },[])
  return (
    <div>
      <h1>Posts</h1>
        <ul>
            {data.map(item => {
                if(Id == item.userId){
                  return <li key={item.id}>`" userId " : {item.userId} , " id " : {item.id} , " title " : {item.title}</li>
                }
            })}
        </ul>
    </div>
  )
}

export default Posts
