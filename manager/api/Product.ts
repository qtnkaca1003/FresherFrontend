import { IProduct } from "./../types/interface";
import Axios from "./Axios";

const apiProduct = {
  getAll: () => {
    const url = `/products`;
    return Axios.get(url);
  },
  addProduct: (data: IProduct) => {
    const url = `/products`;
    return Axios.post(url, data);
  },    
};
export default apiProduct;
