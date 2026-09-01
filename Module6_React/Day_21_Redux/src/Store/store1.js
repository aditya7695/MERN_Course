import {legacy_createStore as createStore} from 'redux'

const stateObj = {
    todo : [],

}

const store1 = createStore(todoReducer);

export default store1;