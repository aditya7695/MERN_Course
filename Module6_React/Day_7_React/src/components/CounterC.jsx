

const CounterC = ({count , setCount}) => {
  return (
    <div>
        <h1>Counter C : {count}</h1>
      <button onClick={()=>setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={()=>setCount((prev) => prev - 1)}>Deacrease</button>
    </div>
  )
}

export default CounterC
