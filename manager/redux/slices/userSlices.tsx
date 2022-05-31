import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToken, IUser } from "../../types/interface";
type initialStateType = {
  propsUsers: IUser[];
  User: IUser;
  token: IToken;
};
const propsUsers: IUser[] = [];
const User: IUser = {
  avatar: "",
  email: "",
  first_name: "",
  id: 0,
  last_name: "",
};
const token: IToken = {
  token: "",
};
const initialState: initialStateType = {
  propsUsers,
  User,
  token,
};
export const userSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<IToken>) => {
      state.token.token = action.payload.token;
    },
    deleteToken: (state, action: PayloadAction<IToken>) => {
      state.token.token = action.payload.token;
    },
    addUsers: (state, action: PayloadAction<IUser>) => {
      state.propsUsers.push(action.payload)
    },
    addUser: (state, action: PayloadAction<IUser>) => {
      state.User.id = action.payload.id;
      state.User.email = action.payload.email;
      state.User.first_name = action.payload.first_name;
      state.User.last_name = action.payload.last_name;
      state.User.avatar = action.payload.avatar;
    },
  },
});
export const { addUsers, addUser, addToken, deleteToken } = userSlice.actions;
export default userSlice.reducer;
