import { useReducer } from 'react';
import {legacy_createStore as createStore} from 'redux'


const stateObj = {
    // key : value,
    todo : [],
    friendsList : [],
    counter : { }
}




const store1 = createStore(todoReducer);

export default store1;