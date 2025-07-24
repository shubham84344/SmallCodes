import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
    name: 'cart',
    initialState: {
        catname: 'dummycategory',
        brandname: 'dummybrand',

    },
    reducers: {
        categoryDataTransfer: () => { },
        brandDataTrandfer: () => { },
    }
})

export const { categoryDataTransfer, brandDataTrandfer } = categorySlice.actions

export default categorySlice.reducer