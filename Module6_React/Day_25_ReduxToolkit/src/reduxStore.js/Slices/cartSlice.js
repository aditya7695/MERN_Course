import { createSlice , configureStore} from '@reduxjs/toolkit';

const initialState = {
    items: [],
    itemsTotal: 0,
    discount: 10,
    discountedTotal: 0
};

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { id, name, quantity, price } = action.payload;
            state.items.push({
                itemId: id,
                itemName: name,
                itemQuantity: quantity,
                itemPrice: price
            });
        },
        updateQuantity: (state, action) => {
            const { id, quantityToDeduct, newQuantity } = action.payload;

            state.items = state.items
                .map(item => {
                    if (item.itemId === id) {
                        const updatedQty = newQuantity !== undefined 
                            ? newQuantity 
                            : item.itemQuantity - quantityToDeduct;

                        return { ...item, itemQuantity: updatedQty };
                    }
                    return item;
                })
                .filter(item => item.itemQuantity > 0);
        },
        updateDiscount: (state, action) => {
            const { newDiscount } = action.payload;
            state.itemsTotal = state.items.reduce(
                (acc, item) => acc + item.itemPrice * item.itemQuantity, 
                0
            );
            if (newDiscount !== undefined) {
                state.discount = newDiscount;
            }
        },
        totalPrice: (state) => {
            const discountAmount = (state.itemsTotal * state.discount) / 100;
            state.discountedTotal = state.itemsTotal - discountAmount;
        }
    }
});

export const { addItem, updateQuantity, updateDiscount, totalPrice } = itemSlice.actions;

const store = configureStore({
    reducer: {
        item: itemSlice.reducer
    }
});

export default store;