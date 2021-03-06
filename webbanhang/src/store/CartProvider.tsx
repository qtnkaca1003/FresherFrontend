import { createContext, useReducer, FC } from "react";
import Product from "../models/IProduct";

interface InitState {
  products?: Product[];
  product?: Product;
}
interface Ichildren {
  children?: React.ReactNode;
}
type ActionType = {
  type: "ADD_CART" | "REMOVE_CART" | "DEL_CART";
  payload: any;
};

const initState: InitState = {
  products: [],
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    quantity: 0,
  },
};

// REDUCER
function reducer(state: InitState, action: ActionType) {
  switch (action.type) {
    case "ADD_CART":
      const updatedCart = state.products ?? [];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
     
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
      
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    
    case "REMOVE_CART":
      return {
        ...state,
        products: state.products?.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "DEL_CART":
      const updatedCartDel = state.products ?? [];
      const updatedItemIndexDel = updatedCartDel.findIndex(
        (item) => item.id === action.payload.id
      );
     
      if (updatedItemIndexDel < 0) {
        updatedCartDel.push({ ...action.payload, quantity: 1 });
      } 
      else {
        const updatedItem = {
          ...updatedCartDel[updatedItemIndexDel],
        };
      
        updatedItem.quantity--;
        if(updatedItem.quantity ===0){
          return {
            ...state,
            products: state.products?.filter(
              (product) => product.id !== action.payload.id
            ),
          };
        }
        updatedCartDel[updatedItemIndexDel] = updatedItem;
      }
      return { ...state, cart: updatedCartDel };
    // case "INCREASE_PRODUCT_CART":
    //   return;
    default:
      return state;
  }
}

export const CartContext = createContext<{
  state: InitState;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initState, dispatch: () => null });

export const CartProvider: FC<Ichildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
