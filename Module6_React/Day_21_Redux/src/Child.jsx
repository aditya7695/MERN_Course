

const Child = (props) => {
  return (
    <div>
      <h1 ref={props.ref}>{props.heading}</h1>
      <ul>

      {
        props.list.map(item => <li key={item.id}>{item.name}</li>)
      }
      </ul>
    </div>
  )
}

export default Child
