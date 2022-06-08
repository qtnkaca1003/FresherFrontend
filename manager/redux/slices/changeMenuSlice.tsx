import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  change: boolean;
};
const change: boolean = true;

const initialState: initialStateType = {
  change,
};

export const activeSlice = createSlice({
  name: "change",
  initialState,
  reducers: {
    changeMenu: (state, action: PayloadAction<boolean>) => {
      state.change = action.payload;
    },
  },
});
export const { changeMenu } = activeSlice.actions;
export default activeSlice.reducer;
