import type { Selector } from "@reduxjs/toolkit";
import type { RootState } from "_store";

export interface Slice {
  loggedIn: boolean;
}

export type SetLoggedIn = (loggedIn: Slice["loggedIn"]) => void;
export type SelectLoggedIn = Selector<RootState, Slice["loggedIn"]>;
