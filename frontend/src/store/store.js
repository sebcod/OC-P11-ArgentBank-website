import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";

const store = configureStore({
  reducer: {
    USER: userSlice.reducer,
  },
  devTools: true,
});

export { store };
