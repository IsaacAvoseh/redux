import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { current } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0,
        totalQuantity: 0
    },
    reducers: {
        addItemToCart: (state, action) => {
            let newItem = action.payload;
            // const { items } = state.items[0];
            // console.log(current(state.items));
           let data = current(state.items);
           const existingItem = data.find(item => item.id === newItem.id);
           console.log(existingItem)
           console.log(data)
            state.totalQuantity++;
            state.totalAmount += newItem.price;
            if(!existingItem) { 
                state.items.push(
                    // ItemId: newItem.id,
                    // price: newItem.price,
                    // quantity: 1,
                    // totalPrice: newItem.price,
                    // name: newItem.title
                newItem
                );
                console.log('newItem added',newItem)
                console.log('state.items',state.items)
                toast.success(`${newItem.title} added to cart`)
                // swal("Success!", `${newItem.title} added to cart`, "success");
            } else {
                existingItem.quantity++;
                existingItem.price = existingItem.price * existingItem.quantity;
                toast.success(`${newItem.title} quantity updated to ${existingItem.quantity}`)
            }

        },

        removeItemFromCart: (state, action) => {
            const itemToRemove = action.payload;
            const existingItem = state.items.find(item => item.id === itemToRemove.id);
            state.totalQuantity--;
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
export default cartSlice