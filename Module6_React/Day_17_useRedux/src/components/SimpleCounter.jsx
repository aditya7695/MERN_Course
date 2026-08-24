// useReducer 
// its a react hook used to manage state that changes in a structured way
// its useful when state updates depends on a previous state or when multiple actions update the same state 
// it seperates "what happens" from "how the state updates "
// it makes logic easier to organize in large components

import { useReducer } from "react"

const initialState = {
    count : 0,
    steps : 1
}

const reducer = (state,action) => {
    switch(action.type){
        case 'increment' : 
        return {...state , count : state.count + state.steps}
        case 'increase-steps' : 
        return {...state , steps : state.steps + 1}
        case 'change-steps' : 
        return {...state , steps : action.payload}
        case 'decrement' : 
        return {...state , count : state.count - state.steps}
        case 'reset' : 
        return {...state , count : 0 , steps : 0}
        default : 
        return state
    }
}


export default function SimpleCounter() {
// const [count, setCount] = useState (0);

const [state , dispatch] = useReducer(reducer , initialState);


return(
<div>

<h2>Count : {state.count}</h2>
<h2>Steps : {state.steps}</h2>
<input type="number" placeholder="enter number of steps"
onChange={(e)=>dispatch({type : 'change-steps' } , {payload : Number(e.target.value)})} />
<button onClick={()=>dispatch({type : 'increment'})} >+</button> 
<button onClick={()=>dispatch({type : 'decrement'})} >-</button> 
<button onClick={()=>dispatch({type : 'reset'})} >Reset</button> 
</div>
)
}
