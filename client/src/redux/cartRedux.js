import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",

    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += (action.payload.price * action.payload.quantity +(action.payload.price * action.payload.quantity)* 0.1);
        }
    }
})

export const {addProduct}= cartSlice.actions;
export default cartSlice.reducer;

// state.total += action.payload.price * action.payload.quantity;