import { createSlice } from "@reduxjs/toolkit";

const initState = () => {
  const stores = JSON.parse(localStorage.getItem("stores"));
  return stores ? { stores } : { stores: [] };
};

const storesSlice = createSlice({
  name: "stores",
  initialState: initState(),
  reducers: {
    addStore: (state, action) => {
      state.stores = [
        ...state.stores,
        { ...action.payload.newStore, products: [] },
      ];
    },
    deleteStore: (state, action) => {
      return {
        stores: state.stores.filter(
          (store) => store.name !== action.payload.name
        ),
      };
    },
    editStore: (state, action) => {
      const index = state.stores.findIndex(
        (store) => store.name === action.payload.name
      );
      const store = { ...state.stores[index], ...action.payload.newDetails };
      state.stores.splice(index, 1, store);
    },
    addProduct: (state, action) => {
      const storeName = action.payload.storeName;
      const newProduct = action.payload.newProduct;
      const index = state.stores.findIndex((store) => store.name === storeName);
      state.stores[index].products.push(newProduct);
    },
    deleteProduct: (state, action) => {},
    editProduct: (state, action) => {},
  },
});

export const storesActions = storesSlice.actions;
export default storesSlice.reducer;
