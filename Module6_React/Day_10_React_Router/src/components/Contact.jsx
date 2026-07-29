import { useNavigate } from "react-router"


const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={()=> navigate('ordersummary')}>OrderSummary</button>
    </div>
  )
}

export default Contact
