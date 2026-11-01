
import {createStore} from "redux";
const initialState = []

const CREATETODO = "CREATETODO";

const DELETETODO = "DELETETODO";

const GETTODOS = "GETTODOS";



const createTodo =(paylod)=>{

    return {type : 'CREATETODO' , paylod}
    
}
const deleteTodo =(paylod)=>{

    return {type : 'DELETETODO' , paylod}

}
const getTodos =()=>{

     return {type : 'GETTODOS'}

}


const todoReducer = (state , action) => {
    switch(action.type){
        case 'CREATETODO' : {
            let obj = {id : state.length , task : action.paylod}
            return [...state , obj]
        }
        case 'DELETETODO' : {
            let id = action.payload
            let index = state.indexOf(id)
            state.splice(index,1)
            return state
        }
        case 'GETTODOS' : 
            return state
        default :
        return state
        
    }
}

const store = createStore(todoReducer,initialState);
store.dispatch(createTodo("todo1"))
store.dispatch(createTodo("todo2"))
store.dispatch(createTodo("todo3"))
// store.dispatch(deleteTodo(1))
store.dispatch(getTodos())
console.log(store.getState())
