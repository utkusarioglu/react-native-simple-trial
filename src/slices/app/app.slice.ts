import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "_store";
import type { Slice, SelectLoggedIn, SetLoggedIn } from "./app.slice.types";

const initialState: Slice = {
  loggedIn: false,
};

const { actions, reducer, name } = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoggedIn: (state, { payload }: PayloadAction<Slice["loggedIn"]>) => {
      return {
        ...state,
        loggedIn: payload,
      };
    },
  },
});

export default reducer;

export const setLoggedIn: SetLoggedIn = mutation =>
  dispatch(actions.setLoggedIn(mutation));
export const selectLoggedIn: SelectLoggedIn = state => state[name].loggedIn;
