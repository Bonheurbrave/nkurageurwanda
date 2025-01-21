import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart : []
}
const CartSlice = createSlice ({
    name:"cart",
    initialState, 
    reducers : {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProductIndex = state.cart.findIndex(p => p.id === product.id);
            if(existingProductIndex === -1){
                state.cart.push(product);
            }else{
                state.cart[existingProductIndex].quantity += 1;
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cart = state.cart.filter(p => p.id!== productId);
        },
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const product = state.cart.find(p => p.id === productId);
            if(product){
                product.quantity = quantity;
            }
        }
    }
})

export const { addToCart, removeFromCart, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;