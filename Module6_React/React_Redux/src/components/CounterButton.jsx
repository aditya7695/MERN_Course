import { useDispatch } from "react-redux"
import { decrement, increment, incrementBy } from "../redux/counterActions";

const CounterButton = () => {
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>INCREASE</button>
      <button onClick={()=>dispatch(incrementBy(5))}>INCREASE BY</button>
      <button onClick={()=>dispatch(decrement())}>DECREASE</button>
    </div>
  )
}

export default CounterButton
