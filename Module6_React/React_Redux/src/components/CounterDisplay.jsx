import { useSelector } from "react-redux"


const CounterDisplay = () => {
    const {counter} = useSelector(state => state)
  return (
    <div>
      <h1>Counter : {counter.count}</h1>
    </div>
  )
}

export default CounterDisplay
