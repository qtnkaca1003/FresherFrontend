import React, { createContext } from "react";
type ProductType = {
    id: number;
    name: string;
    price: number;
  }
  
  type InitialStateType = {
    products: ProductType[];
    shoppingCart: number;
  }
  
  const initialState = {
    products: [],
    shoppingCart: 0,
  }
const AppContext = createContext<InitialStateType>(initialState);