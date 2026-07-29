import { useNavigate } from "react-router"



const NoMatch = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Route does not exist</h1>
      <button onClick={()=> navigate('/')}>Home</button>
    </div>
  )
}

export default NoMatch
