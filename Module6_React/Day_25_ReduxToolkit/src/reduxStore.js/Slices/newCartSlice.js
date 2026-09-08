import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({

    name : 'cart' ,
    initialState : {
        availableItems : [{
            id : 1,
            name : "Item1",
            price : 1000,
            qua : 22
        },{
            id : 2,
            name : "Item2",
            price : 1001,
            qua : 22
        },{
            id : 3,
            name : "Item3",
            price : 1002,
            qua : 22
        },{
            id : 4,
            name : "Item4",
            price : 1003,
            qua : 22
        }],
        addedItems : [],
        discount : 10,
        total : 0
    },
    reducers: {
        addItem : (state , action)  => {

            let fullItem = null;
            let undiscountedtotal =0;
            for(let x of state.availableItems){
                if(x.id === action.payload.id){
                    fullItem = x;
                    break;
                }
            }
            fullItem.qua = action.payload.qua;

            for(let y of state.addedItems){
                undiscountedtotal += (y.qua * y.price);
            }
            state.addedItems.push(fullItem);
            undiscountedtotal += (fullItem.qua * fullItem.price);
            state.total = undiscountedtotal - (undiscountedtotal * state.discount/100)
        }
    }

})
export const {addItem} = createSlice.action

const store = configureStore ({
    reducer : {
     cart : cartSlice.reducer
    }
})

export default store