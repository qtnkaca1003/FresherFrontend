import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";
type initialStateType = {
  postList: IPost[];
};
const postList: IPost[] = [
  {
    id: 1,
    title: "Title",
    content: "Content post",
    productName: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    product: "1",
    category: "men's clothing",
  },
  {
    id: 2,
    title: "Title",
    content: "Content post",
    productName: "Mens Casual Premium Slim Fit T-Shirts",
    product: "2",
    category: "men's clothing",
  },
  {
    id: 3,
    title: "Title",
    content: "Content post",
    productName: "Mens Cotton Jacket",
    product: "3",
    category: "men's clothing",
  },
];

const initialState: initialStateType = {
  postList,
  
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addNewPost: (state, action: PayloadAction<IPost>) => {
      state.postList.push(action.payload);
    },
  },
});

export const { addNewPost } = postSlice.actions;
export default postSlice.reducer;
