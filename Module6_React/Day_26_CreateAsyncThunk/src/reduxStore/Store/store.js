import { configureStore } from "@reduxjs/toolkit";
import multiplierReducer from './Slices/multiplierSlice.js';
import apireducer from './Slices/apiTestSlice.js'
import  counterReducer  from "./Slices/counterSlice.js";

const store = configureStore({
  reducer: {
    multiplier: multiplierReducer,
    apitester : apireducer,
    counter : counterReducer 
  }
});

export default store;