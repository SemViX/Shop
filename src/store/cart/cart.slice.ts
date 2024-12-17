import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/productType";
import { findProductIndex } from "../../utils/findElIndex";


export interface CartProduct extends ProductType{
    quantity: number
}



const initialState: CartProduct[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductType | undefined>) => {
            if (action.payload){
                state.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state, action: PayloadAction<ProductType | undefined> ) => {
            if (action.payload){

                const indexForRemove = findProductIndex(state, action.payload.id)
                state.splice(indexForRemove, 1)
            }
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const productIndex = findProductIndex(state, action.payload)
            state[productIndex].quantity++
        },
        reduceQuantity: (state, action:PayloadAction<number>) => {
            const productIndex = findProductIndex(state, action.payload)
            state[productIndex].quantity--
        }
    }
})

export default cartSlice.reducer

export const {addToCart, removeFromCart, increaseQuantity, reduceQuantity} = cartSlice.actions