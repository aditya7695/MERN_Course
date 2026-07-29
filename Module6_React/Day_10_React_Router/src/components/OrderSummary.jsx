import { useNavigate } from "react-router"


const OrderSummary = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>OrderSummary</h1>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default OrderSummary
