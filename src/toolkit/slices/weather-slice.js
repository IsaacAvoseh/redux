import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState:{
        data: [],
        forecast: []
    },
  

    reducers: {
        setWeather: (state, action) => {
            // state.data.push(action.payload);
            state.data = action.payload;
        },

        }
})

export const weatherActions = weatherSlice.actions
export default weatherSlice;