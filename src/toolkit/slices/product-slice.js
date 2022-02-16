import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
    },

    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const productActions = productSlice.actions
export default productSlice;