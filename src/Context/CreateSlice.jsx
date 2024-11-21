// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//     name: "counter" , 
//     initialState :{value:0},
//     reducers:{
//         increment:(state)=>{
//             state.value +=1
//         },
//         decrement:(state)=>{
//             state.value -=1
//         },
//     }
// })

// export let {increment,decrement} = counterSlice.actions;
// let counterReducer = counterSlice.reducer ;
// export default counterReducer; 




let counterSlice = createSlice({
    name:"counter",
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
    }
})

export const {increment, decrement} = counterSlice.actions;

let counterReducer = counterSlice.reducer;
export default counterReducer