import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/interface";
type initialStateType = {
  propsUsers: IUser[];
  User: IUser;
};
const propsUsers: IUser[] = [];
const User: IUser = {
  id: 0,
  email: "",
  username: "",
  password: "",
  name: {
    firstname: "",
    lastname: "",
  },
  address: {
    city: "",
    street: "",
    number: 0,
    zipcode: "",
    geolocation: {
      lat: "",
      long: "",
    },
  },
  phone: "",
};
const initialState: initialStateType = {
  propsUsers,
  User,
};
export const userSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.propsUsers.push(action.payload);
    },
    User1: (state, action: PayloadAction<IUser>) => {
      state.User.id = action.payload.id;
      state.User.email = action.payload.email;
      state.User.username = action.payload.username;
      state.User.password = action.payload.password;
      state.User.phone = action.payload.phone;
      state.User.name.firstname = action.payload.name.firstname;
      state.User.name.lastname = action.payload.name.lastname;
      state.User.address.city = action.payload.address.city;
      state.User.address.number = action.payload.address.number;
      state.User.address.street = action.payload.address.street;
      state.User.address.zipcode = action.payload.address.zipcode;
      state.User.address.geolocation.lat =
        action.payload.address.geolocation.lat;
      state.User.address.geolocation.long =
        action.payload.address.geolocation.long;
    },
  },
});
export const { addUser, User1 } = userSlice.actions;
export default userSlice.reducer;
