import { INCREMENT , DECREMENT , INCREMENTBY } from "./counterActions";

const initialState = {
    count : 0
}

const counterReducer = (state=initialState , action) => {
    switch(action.type){
        case INCREMENT:
        return  {...state , count : state.count + 1 }
        case INCREMENTBY:
        return  {...state , count : state.count + action.paylod }
        case DECREMENT:
        return  {...state , count : state.count - 1 }
        default : 
        return state
    }
}

export default counterReducer