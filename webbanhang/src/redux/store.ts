import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './reducer/PostReducer';
import { productSlice } from './reducer/ProductReducer';
export const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    listProduct:  productSlice.reducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;