import { useEffect, useState } from "react"

function fakeFetch(id){
    return new Promise((res , rej)=>{
        const delay = Math.random() * 2000;
        setTimeout(()=>{
            res(`Student ${id} data`)
        },delay)
    })
}

const RaceCondition = () => {
    const [id , setId] = useState(1);
    const [data , setData] = useState("")
    useEffect(()=>{
        let isActive = true;
        fakeFetch(id).then((result)=>{
            if(isActive){
                setData(result)
            }
        })
        return ()=>{
            isActive = false;
        }
    },[id])

  return (
    <div>
        <h2>Sample race condition</h2>
        <button onClick={()=> setId(1)}>Student 1</button>
        <button onClick={()=> setId(2)}>Student 2</button>
        <button onClick={()=> setId(3)}>Student 3</button>
        <p>current Id : {id}</p>
        <p>Data Shown : {data}</p>
    </div>
  )
}

export default RaceCondition
