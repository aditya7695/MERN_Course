import { legacy_createStore as createStore } from 'redux';

const statevariableObj = {
    items: []
};

const itemReducer = (state = statevariableObj, action) => {
    switch (action.type) {
        case 'addItem': {
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        itemId: action.payload.id,
                        itemName: action.payload.name,
                        itemQuantity: action.payload.quantity,
                        itemPrice: action.payload.price
                    }
                ]
            };
        }
        case 'updateQuantity': {
            const { id, quantityToDeduct, newQuantity } = action.payload;

            return {
                ...state,
                items: state.items
                    .map(item => {
                        if (item.itemId === id) {
                            const updatedQty = newQuantity !== undefined 
                                ? newQuantity 
                                : item.itemQuantity - quantityToDeduct;

                            return { ...item, itemQuantity: updatedQty };
                        }
                        return item;
                    })
                    .filter(item => item.itemQuantity > 0)
            };
        }
        default:
            return state;
    }
};

const store = createStore(itemReducer);

store.subscribe(() => {
    console.log("Updated State:", store.getState().items);
});

// Add items
store.dispatch({ type: 'addItem', payload: { id: 1, name: "Mobiles", quantity: 50, price: 30000 } });
store.dispatch({ type: 'addItem', payload: { id: 2, name: "Laptops", quantity: 20, price: 60000 } });

// Case 1: Partial update (reduces quantity to 20)
store.dispatch({ type: 'updateQuantity', payload: { id: 1, newQuantity: 20 } });

// Case 2: Deduct full remaining quantity (removes the item completely)
store.dispatch({ type: 'updateQuantity', payload: { id: 1, quantityToDeduct: 20 } });