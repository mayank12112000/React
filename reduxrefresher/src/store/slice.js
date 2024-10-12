import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems:[]
}
export const productSlice= createSlice({
    name:"products",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.cartItems.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.cartItems = state.cartItems.filter((item)=>item.id != action.payload)
        }
    }
})
export const {addItem,removeItem} = productSlice.actions
export default productSlice.reducer