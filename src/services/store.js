import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// configure store/global state
export const store = configureStore({
  // allow us to grab a slice of the entire store/global state
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  // middleware allows us to do something with the state before we get it
  // create callback function call getDefaultMiddleWare and call concat to pass in to make reducer work
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(articleApi.middleware),
});
