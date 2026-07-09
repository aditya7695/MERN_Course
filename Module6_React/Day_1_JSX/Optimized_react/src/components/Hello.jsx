

const Hello = () => {
  const name = "Aditya";
  const age = 22;
  const isAdult = (age>18) ? true : false
  return (
    <div>
      <h1>Hello {name}, your age is {age}</h1>
      <h3>You are : {(age>18 ? "Adult" : "Not Adult")}</h3>
      {/* {isAdult ? <div>This is adult content</div> : ""} */}
      {isAdult && <div>This is adult content</div>}
    </div>
  )
}

export default Hello
