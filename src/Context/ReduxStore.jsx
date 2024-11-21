// import { configureStore } from "@reduxjs/toolkit";
//  import counterReducer from "./CreateSlice";
// export const counterStore = configureStore({
//     reducer:{
//         counter:counterReducer
//     }
// })

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CreateSlice";

export const counterStore = configureStore({
    reducer:{
        counter:counterReducer
    }
})