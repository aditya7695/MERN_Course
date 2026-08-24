import { useReducer } from "react";


const initialState = {
    isVisible : true
}

const reducer = (state , action) => {
    switch(action.type){
        case 'toggle' :
            return{...state , isVisible : !state.isVisible}
    }
}
export default function  ToggleMessage  () {

    // const [toggle , setToggle] = useState(false);
   
    const [state , dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <button onClick={()=> dispatch({type : 'toggle'})}>
          Toggle Message
      </button>
      {state.isVisible && <p>Hello students , welcome to React !</p>}
    </div>
  )
}


