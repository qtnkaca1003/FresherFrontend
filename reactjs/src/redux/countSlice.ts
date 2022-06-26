import { createSlice } from "@reduxjs/toolkit"

export interface CountState {
  count: number
}

const initialState: CountState = {
  count: 0,
}

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increase: (state) => {
      state.count = state.count + 1
    },
    decrease: (state) => {
      state.count = state.count - 1
    },
  },
})

export const { increase, decrease } = countSlice.actions

export default countSlice.reducer
