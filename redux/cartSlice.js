import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cardCount: 0
    },
    reducers: {
        addInCart: () => { },
        removeFromCart: () => { },
    }
})

export const { addInCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer