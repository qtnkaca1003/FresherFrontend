import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IProduct from "../../models/IProduct";
type initialStateType = {
  productList: IProduct[];
};
const productList: IProduct[] = [];

const initialState: initialStateType = {
  productList,
};
export const productSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.productList.push(action.payload);
      //state.productList
    },
  },
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
