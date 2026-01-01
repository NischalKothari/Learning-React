import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment: (state)=>{
            state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        },
        increaseByFive: (state)=>{
            state.value += 5
        },
        decreaseByAmount: (state,actions)=>{
            state.value -= actions.payload
        }
    }
})

export const {increment,decrement,increaseByFive,decreaseByAmount} = counterSlice.actions
export default counterSlice.reducer