import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/interface";
type initialStateType = {
  propsProduct: IProduct;
};
const propsProduct: IProduct = {
  id: 0,
  title: "",
  category: "",
  price: 0,
  description: "",
  image: "",
};

const initialState: initialStateType = {
  propsProduct
};
export const productSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    Product: (state, action: PayloadAction<IProduct>) => {
      state.propsProduct.title = action.payload.title;
      state.propsProduct.id = action.payload.id;
      state.propsProduct.price = action.payload.price;
      state.propsProduct.category = action.payload.category;
      state.propsProduct.description = action.payload.description;
      state.propsProduct.image = action.payload.image;
    },
  },
});
export const { Product } = productSlice.actions;
export default productSlice.reducer;
