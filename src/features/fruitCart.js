import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cart: [
      
    ]
}


export const fruitCart = createSlice({
    name: "fruitCart",
    initialState,
    reducers: {
        addOne: (state,action)=>{
            const fruitIndex = state.cart.findIndex(obj=> obj.id === action.payload.id)
            if(fruitIndex !== -1){
                state.cart[fruitIndex].quantity++
            }
            else{
                state.cart.push({...action.payload,quantity: 1})
            }
        },
        removeOne: (state,action)=>{
            const fruitIndex = state.cart.findIndex(obj=> obj.id === action.payload)
            if(fruitIndex !== -1){
                if(state.cart[fruitIndex].quantity > 1){
                    state.cart[fruitIndex].quantity--
                }
                else{
                    state.cart.splice(fruitIndex,1)
                }
            }
            else{
               console.log("Le panier ne contient pas le fruit que vous voulez supprimer")
            }
        }
    }
})

export const {addOne,removeOne} = fruitCart.actions
export default fruitCart.reducer