import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
        totalQuantity: 0
    },
    reducers: {
        addItemToCart: (state, action) => {
            const  newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem) {
                state.items.push({
                    ItemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }

        },

        removeItemFromCart: (state, action) => {
            const itemToRemove = action.payload;
            const existingItem = state.items.find(item => item.id === itemToRemove.id);
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== itemToRemove.id);
            } else {
                existingItem.quantity -= 1;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }
        },
    }
    });

export const cartActions = cartSlice.actions;
export default cartSlice;