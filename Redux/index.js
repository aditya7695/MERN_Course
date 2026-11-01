import {createStore} from "redux";

const INCREMENT = "INCREMENT";
const INCREMENTBY = "INCREMENTBY";
const DECREMENT = "DECREMENT";

function increment(){
    return {type:'INCREMENT'}
}
function decrement(){
    return {type:'DECREMENT'}
}
function incrementBy(paylod=1){
    return {type : 'INCREMENTBY',paylod}
}

const counterReducer = (state,action) =>{
    switch(action.type){
        case "INCREMENT" :
            return state + 1
        case "DECREMENT" :
            return state - 1
            case "INCREMENTBY" :
            return state + action.paylod
        default : 
            return state
    }
}



const store = createStore(counterReducer,0);

console.log(store.getState())

store.dispatch(increment())
// store.dispatch({type:"INCREMENT"})
// store.dispatch({type:"INCREMENT"})
// store.dispatch({type:"INCREMENT"})
// store.dispatch({type:"INCREMENT"})
// store.dispatch({type:"INCREMENT"})

console.log(store.getState())

store.dispatch(decrement())
store.dispatch(incrementBy(5))

console.log(store.getState())



