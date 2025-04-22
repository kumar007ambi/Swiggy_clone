import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    selectedRestaurant: null,
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
      //state.items.pop();
      let index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        if (action.payload.itemCount > 1) {
          state.items[index].itemCount--;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      // RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      // return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
      state.items.length = 0;
      state.selectedRestaurant = null;
      state.totalAmount = 0;
    },
    setRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload;
    },
    clearRestaurant: (state) => {
      state.selectedRestaurant = null;
    },
    computeTotal: (state) => {
      let totalAmount = state.items.reduce((precCount, item) => {
        return precCount + item.price / 100 * item.itemCount;
      }, 0)
      state.totalAmount = parseFloat(totalAmount.toFixed(2));
    }
  },
});

export const { addItem, removeItem, clearCart, setRestaurant, clearRestaurant, computeTotal } = cartSlice.actions;

export default cartSlice.reducer;