import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state,action)=>{
            console.log(action)
            state.value++
        },
        decrecrement: (state,action)=>{
            console.log(action)
            state.value--
        },
        multiply: (state,action)=>{
            console.log(action)
            state.value = state.value*10
        },
        divide: (state,action)=>{
            console.log(action)
            state.value = state.value/10
        }
    }
})
console.log(counter)
export const {increment, decrecrement,multiply,divide} = counter.actions
export default counter.reducer