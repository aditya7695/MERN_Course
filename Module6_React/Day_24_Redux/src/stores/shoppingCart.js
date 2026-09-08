import { legacy_createStore as createStore } from 'redux';

const statevariableObj = {
    items: [],
    itemsTotal: 0,
    discount: 10,
    discountedTotal: 0
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

        case 'updateDiscount': {
            const { newDiscount } = action.payload;
            return {
                ...state,
                itemsTotal: state.items.reduce((acc, crr) => acc + (crr.itemPrice * crr.itemQuantity), 0), 
                discount: newDiscount !== undefined ? newDiscount : state.discount,
            };
        }

        case 'totalPrice': {
            const discountAmount = (state.itemsTotal * state.discount) / 100;
            return {
                ...state, 
                discountedTotal: state.itemsTotal - discountAmount
            };
        }

        default:
            return state;
    }
};

const store = createStore(itemReducer);

export default store;