import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    //reducer functions with callback
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      // console.log("state", action.payload);
      let index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index].itemCount++;
      } else {
        state.items.push({ ...action.payload, itemCount: 1 });
      }
      // state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      // RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;