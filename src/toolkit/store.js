import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui-slice";
import cartSlice from "./slices/cart-slice";
import productSlice from "./slices/product-slice";
import Weather from "../components/Weather";
import weatherSlice from "./slices/weather-slice";
import forecastSlice from "./slices/forecast-slice";
// import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux"; 

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers =  combineReducers({
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    products: productSlice.reducer,
    weather: weatherSlice.reducer,
    forecast: forecastSlice.reducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

// const store = configureStore({
//     reducer: {
//         ui: uiSlice.reducer,
//         cart: cartSlice.reducer,
//         products: productSlice.reducer,
//         weather: weatherSlice.reducer
//     },
    
    
// }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;