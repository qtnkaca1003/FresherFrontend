import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import appReducer from "redux/appSlice"
import countReducer from "redux/countSlice"
import userSlice from "./userSlice"

export function makeStore() {
  return configureStore({
    reducer: {
      app: appReducer,
      count: countReducer,
      user: userSlice,
    },
  })
}

const store = makeStore()

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store
