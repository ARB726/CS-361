// import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     cartItems:[]
// }


// const cartSlice= createSlice({
//     name: 'cart',
//     initialState:initialState,
//     reducers:{
//         addtoCart:(state,action)=>{
//             const existingItem=state.cartItems.find(item=>item._id===action.payload._id);
//             if(!existingItem){
//                 state.cartItems.push(action.payload)
//                 alert("Item Added Succesfully1")
//             }
//             else if {(
//                 alert("item already exists")
//             )
//         }
//     }
// })

// //export the actions 
// export const {addtoCart}=cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2"

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,  // ✅ Fixed missing comma in earlier versions
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your have succesfully added book to the cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            } else (
                Swal.fire({
                    title: "This item already exist in the cart",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK!"
                  })
            )
        },
        removeFromCart: (state,action)=>{
            state.cartItems=state.cartItems.filter(item=>item._id !== action.payload._id)
        },
        clearCart:(state)=>{
            state.cartItems=[]
        }
    },
});

// Export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
