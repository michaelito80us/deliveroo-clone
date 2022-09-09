import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";

// REDUX STORE

export default configureStore({
  reducer: {
    basket: basketReducer,
  },
});
