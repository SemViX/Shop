import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/productType";
import { isInStore } from "../../utils/isInStore";
import { findProductIndex } from "../../utils/findElIndex";

const initialState:ProductType[] = []

export const favoritesSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        addToFavorites: (state, action:PayloadAction<ProductType | undefined>) => {
            if (action.payload && !isInStore(state, action.payload.id)){
                state.push(action.payload)
            }
        },
        removeFromFavorites: (state, action:PayloadAction<ProductType | undefined> ) => {
            if (action.payload && isInStore(state, action.payload.id)){
                const indexForRemove = findProductIndex(state, action.payload.id)
                state.splice(indexForRemove, 1)
                
            }
        }

    }
})

export default favoritesSlice.reducer;

export const {addToFavorites, removeFromFavorites} = favoritesSlice.actions