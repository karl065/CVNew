import { configureStore } from "@reduxjs/toolkit";
import appReducerUsuarios from "./Slices/SliceUsuarios/SliceUsuarios";

const store = configureStore({
  reducer: {
    usuarios: appReducerUsuarios,
  },
});

export default store;
