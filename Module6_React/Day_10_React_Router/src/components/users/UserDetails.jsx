import { useParams } from "react-router"



const UserDetails = () => {

    const {id} = useParams()
    console.log(id)
  return (
    <div>
      <h2>User details</h2>
    </div>
  )
}

export default UserDetails
