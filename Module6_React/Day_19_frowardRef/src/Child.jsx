// import { forwardRef } from "react"

import { forwardRef } from "react"


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


const Child = forwardRef((props , ref) => {
  return (
    <div>
      <p>{props.name} is learning Forward ref</p>
      <input 
      ref={ref.iRef}
      type="text" />
      <h1 ref={ref.hRef}>End</h1>
    </div>
  )
})

export default Child

