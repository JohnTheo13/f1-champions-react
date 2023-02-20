import { createReducer } from "@reduxjs/toolkit";

import { Action, Store } from "./types";
import { updateSearchTerm } from "./actions";

export const initialStore: Store = {};

export default createReducer(initialStore, {
  [updateSearchTerm.type]: (state: Store, action: Action<string>) => ({
    ...state,
  }),
});
