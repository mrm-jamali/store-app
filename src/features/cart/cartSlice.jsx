import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helper/helper";

const initialState = {
  productvalue: 0,
  selectedItem: [],
  checkout: false,
  itemsCounter: 0,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItem.find((i) => i.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItem);
        state.itemsCounter = sumQuantity(state.selectedItem);
        state.checkout = false;
      }
    },
      removeItem: (state, action) => {
        const newSelectedItem = state.selectedItem.filter(
          (i) => i.id !== action.payload.id
        );
        state.selectedItem = newSelectedItem;
        state.total = sumPrice(state.selectedItem);
        state.itemsCounter = sumQuantity(state.selectedItem);
      },
      incrementItem: (state, action) => {
        const incrementIndex = state.selectedItem.findIndex(
          (i) => i.id === action.payload.id
        );
        state.selectedItem[incrementIndex].quantity++;
           state.total = sumPrice(state.selectedItem);
        state.itemsCounter = sumQuantity(state.selectedItem);
      },

      decrementItem: (state, action) => {
        const decrementIndex = state.selectedItem.findIndex(
          (i) => i.id === action.payload.id
        );
        state.selectedItem[decrementIndex].quantity--;
           state.total = sumPrice(state.selectedItem);
        state.itemsCounter = sumQuantity(state.selectedItem);
      },
      CheckOut: (state) => {
        (state.selectedItem = []);
          (state.total = 0);
          (state.itemsCounter = 0);
          (state.checkout = true);
      },
 
  },
});

export default cartSlice.reducer;
export const {
 addItem,
  incrementItem,
  decrementItem,
  removeItem,
     CheckOut,
} = cartSlice.actions;
