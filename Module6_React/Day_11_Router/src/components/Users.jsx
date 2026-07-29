import { useSearchParams } from "react-router"

const Users = () => {
    const [searchParams , setSearchParams] = useSearchParams();

    const activeUsers = searchParams.get('filter') == 'active' ? true : false 
    // console.log(searchParams.get('sort'))
    // console.log(searchParams.get('marks'))


    // to get all parameters

    // for(const[key,value] of searchParams.entries()){
    //     console.log(key,value)
    // }

    // when you have multiple attributes
    console.log(searchParams.getAll('sort'))

  return (
    <div>
      <h1>Users</h1>
      <button onClick={()=> setSearchParams((prev)=>({...prev,filter : 'active'}))}>Active Users</button>
      <button onClick={()=> setSearchParams({})}>Reset Filter</button>
      {activeUsers ? <h1>Showing Active users </h1> : <h1>Showing inactive users</h1>}
    </div>
  )
}

export default Users
