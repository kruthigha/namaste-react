import {createSlice , current} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addItem : (state,action)=>{
        state.items.push(action.payload)
        },
        removeItem :(state)=>{
            state.items.pop()
        },
        clearCart :(state)=>{
            console.log("ostate",state);
            console.log("cState",current(state));
            state.items.length=0 //[] 
            console.log(state);
           
            console.log(state);
        }
    }
})
export default cartSlice.reducer;
export const {addItem ,removeItem,clearCart}=cartSlice.actions