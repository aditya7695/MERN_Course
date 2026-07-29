import { useNavigate } from "react-router"



const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>navigate('ordersummary')}>Order Summary Page</button>
      <button onClick={()=>navigate('about')}>About Page</button>
      <button onClick={()=>navigate('contact')}>Contact Page</button>
    </div>
  )
}

export default Home
