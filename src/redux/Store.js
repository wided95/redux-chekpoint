import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./todoSlice/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});
