import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({
    name: "weather",
    initialState: {
        forecast: []
    },


    reducers: {
    
        setForeCast: (state, action) => {
            // state.forecast.push(action.payload)
            state.forecast = action.payload
        }
    }
})

export const forecastActions = forecastSlice.actions
export default forecastSlice;