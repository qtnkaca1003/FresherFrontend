//import React from "react";

import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './reducer/PostReducer';

export const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    products: postSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;