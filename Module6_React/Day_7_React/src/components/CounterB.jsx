

const CounterB = ({count,setCount}) => {
  return (
    <div>
        <h1>Counter B : {count}</h1>
      <button onClick={()=>setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={()=>setCount((prev) => prev - 1)}>Deacrease</button>
    </div>
  )
}

export default CounterB
