import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import storesReducer from "./stores/storesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    stores: storesReducer,
  },
});

export default store;
