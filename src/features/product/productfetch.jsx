import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Services/Config";

const initialState = {
  loading: false,
  error: "",
  products: [],
};

const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  return api.get("/products");
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      (state.loading = false),
        (state.products = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      (state.loading = false),
        (state.products = []),
        (state.error = action.error.message);
    });
  },
});


export default productSlice.reducer;
export {fetchProducts}