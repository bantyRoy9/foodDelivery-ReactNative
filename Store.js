import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Feature/basketSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    }
})