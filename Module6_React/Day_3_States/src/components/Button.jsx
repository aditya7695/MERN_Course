

const Button = ({text,clickEvent}) => {
  return (
    <div>
        <button onClick={clickEvent}>{text}</button>
    </div>
  )
}

export default Button
