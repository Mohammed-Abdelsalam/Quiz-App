import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice.ts";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
});
export { scoreReducer };
