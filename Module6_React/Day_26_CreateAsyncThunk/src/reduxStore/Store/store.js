import { configureStore } from "@reduxjs/toolkit";
import multiplierReducer from './Slices/multiplierSlice.js';
import apireducer from './Slices/apiTestSlice.js'

const store = configureStore({
  reducer: {
    multiplier: multiplierReducer,
    apitester : apireducer
  }
});

export default store;