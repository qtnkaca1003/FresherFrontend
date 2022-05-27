import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IProduct } from "../../types/interface";
type initialStateType = {
  product: IProduct;
  category: ICategory[];
  propsProducts: IProduct[];
};
const propsProducts: IProduct[] = [];
const category: ICategory[] = [];
const product: IProduct = {
  id: 0,
  title: "",
  category: "",
  price: 0,
  description: "",
  image: "",
  rating: { rate: 0, count: 0 },
};

const initialState: initialStateType = {
  product,
  category,
  propsProducts,
};
export const productSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    Product: (state, action: PayloadAction<IProduct>) => {
      state.product.title = action.payload.title;
      state.product.id = action.payload.id;
      state.product.price = action.payload.price;
      state.product.category = action.payload.category;
      state.product.description = action.payload.description;
    },
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.propsProducts.push(action.payload);
    },
    addCategory: (state, action: PayloadAction<ICategory>) => {
      state.category.push(action.payload);
    },
  },
});
export const { Product, addCategory, addProduct } = productSlice.actions;
export default productSlice.reducer;
