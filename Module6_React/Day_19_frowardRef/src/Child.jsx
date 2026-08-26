// import { forwardRef } from "react"


// const Child = forwardRef((props , ref) => {
//   return (
//     <div>
//         <p>{props.name}</p>
//       <input 
//      ref={ref}
//      type="text" />
//     </div>
//   )
// })

// export default Child


const Child = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <input 
      ref={props.ref}
      type="text" />
    </div>
  )
}

export default Child

