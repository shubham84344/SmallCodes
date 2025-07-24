import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categorySlice';
import cartReducer from './slices/cartSlice';


const mystore = configureStore({
    reducer: {
        cart: cartReducer,
        category: categoryReducer,

    }
});

export default mystore;