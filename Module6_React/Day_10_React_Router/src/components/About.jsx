
import { useNavigate } from "react-router"
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <button onClick={()=>navigate('ordersummary')}>Order Summary Page</button>
    </div>
  )
}

export default About
