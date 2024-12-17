import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cart.slice'
import favoritesReducer from './favorites/favorites.slice'


export const store = configureStore({
    reducer:{
        cart: cartReducer,
        favorites: favoritesReducer
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch