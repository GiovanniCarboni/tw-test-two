import { createSlice } from "@reduxjs/toolkit";

const initialState = { stores: [] };

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    addStore: (state, action) => {
      state.stores = [...state.stores, action.payload.newStore];
    },
    deleteStore: (state, action) => {},
    editStore: (state, action) => {},
    addProduct: (state, action) => {},
    deleteProduct: (state, action) => {},
    editProduct: (state, action) => {},
  },
});

export const storesActions = storesSlice.actions;
export default storesSlice.reducer;
