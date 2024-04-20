import {configureStore} from "@reduxjs/toolkit"
import counter from "./features/counter"
import fruits from "./features/fruits"
import fruitCart from "./features/fruitCart"

export const store = configureStore({
    reducer: {
        counter,
        fruits,
        fruitCart
    }
})