import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/interface";
type initialStateType = {
  postUser: IUser[];
};
const postUser: IUser[] = [];
const initialState: initialStateType = {
  postUser,
};
export const userSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<IUser>) => {
      state.postUser.push(action.payload);
    },
  },
});
export const { addNewUser } = userSlice.actions;
export default userSlice.reducer;
