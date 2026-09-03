import { legacy_createStore as createStore } from 'redux';


const statevariableObj = {
    items: []
};

const itemReducer = (state = statevariableObj, action) => {
    switch (action.type) {
        case 'addItem': {
            const newItem = [...state.items];
            newItem.push({
                itemId: action.payload.id,
                itemName: action.payload.name,
                itemQuantity : action.payload.quantity,
                itemPrice : action.payload.price
            });
            return { ...state, items: newItem };
        }
        case 'removeItem': {
            const newItems = state.items.map(item => {
                if(item.id!== action.payload.id){
                    item.quantity = item.quantity-action.payload.quantity
                }
            })
            return { ...state, items : newItems };
        }
        default:
            return state;
    }
};

const store = createStore(itemReducer);

store.subscribe(() => {
    console.log("new Changed value", store.getState().items);
});

// store.dispatch({ type: 'add', payload: { name: "Coding", id: 1 } });
// store.dispatch({ type: 'add', payload: { name: "Gaming", id: 2 } });
// store.dispatch({ type: 'add', payload: { name: "Playing", id: 3 } });

// store.dispatch({ type: 'toggle', payload: { id: 2 } });

// console.log("Active toggles:", store.getState().todo.filter(item => item.toggle === true));


store.dispatch({type : 'addItem' , payload : {id : 1 , name : "Mobiles" , quantity : 50 , price : 30000}})
store.dispatch({type : 'addItem' , payload : {id : 2 , name : "Laptop" , quantity : 20 , price : 70000}})
store.dispatch({type : 'addItem' , payload : {id : 3 , name : "PC" , quantity : 12 , price : 120000}})

store.dispatch({type : 'removeItem', payload : {id : 2 , quantity : 4} } )

