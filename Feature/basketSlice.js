import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[]
}

export const basketSlice = createSlice({
    name:'Basket',
    initialState,
    reducers:{
        addToBasket:(state,action)=>{
            state.items = [...state.items, action.payload]
        },
        removeToBasket : (state,action) =>{
            let index = state.items.findIndex((item)=> item.title === action.payload.item);
            let newBasket = [ ...state.items ]

            if(index >= 0){
                newBasket.splice(index,1)
            }else{
                console.warn(`Can/'t remove item from basket`)
            }
            state.items = newBasket
        }
    }
})
//action creators are generators for each case reducer function
//on every action calling it is provide the reducers to action call
export const { addToBasket, removeToBasket} = basketSlice.actions

export const selectBasketItems = (state)=> state.basket.items;
export const selectBasketItemsById = (state,id) => state.basket.items.filter((item)=> item.id === id);
export const basketItemsTotal = (state)=> state.basket.items.reduce((total,item)=> total += parseFloat(item.price),0);
export default basketSlice.reducer