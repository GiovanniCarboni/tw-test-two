import { createSlice } from "@reduxjs/toolkit";
import dummyStores from "../../data/stores";

const initState = () => {
  const stores = JSON.parse(localStorage.getItem("stores"));
  return stores ? { stores } : { stores: dummyStores };
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
    deleteStore: (state, action) => ({
      stores: state.stores.filter(
        (store) => store.name !== action.payload.name
      ),
    }),
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
    deleteProduct: (state, action) => {
      const storeName = action.payload.storeName;
      const productName = action.payload.productName;
      const storeIndex = state.stores.findIndex(
        (store) => store.name === storeName
      );
      const productsUpdated = state.stores[storeIndex].products.filter(
        (product) => product.name !== productName
      );
      state.stores[storeIndex].products = productsUpdated;
    },
    editProduct: (state, action) => {
      const storeName = action.payload.storeName;
      const productName = action.payload.productName;
      const storeIndex = state.stores.findIndex(
        (store) => store.name === storeName
      );
      console.log(storeIndex);
      const productIndex = state.stores[storeIndex].products.findIndex(
        (product) => product.name === productName
      );
      const productUpdated = {
        ...state.stores[storeIndex].products[productIndex],
        ...action.payload.newDetails,
      };
      state.stores[storeIndex].products.splice(productIndex, 1, productUpdated);
    },
  },
});

export const storesActions = storesSlice.actions;
export default storesSlice.reducer;
