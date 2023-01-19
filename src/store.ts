import { configureStore } from "@reduxjs/toolkit";
import app from "_slices/app/app.slice";

const store = configureStore({
  reducer: {
    app,
  },
});

export default store;
export const { dispatch, subscribe, getState } = store;
export type RootState = ReturnType<typeof store.getState>;
