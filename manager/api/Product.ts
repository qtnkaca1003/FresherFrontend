import { IProduct } from "./../types/interface";
import Axios from "./Axios";
import AxiosPagin from "./AxiosPagin";

const apiProduct = {
  getPage: (id: string | string[] | number) => {
    const url = `/list-product/${id}`;
    return AxiosPagin.get(url);
  },
  addProduct: (data: IProduct) => {
    const url = `/products`;
    return Axios.post(url, data);
  },    
};
export default apiProduct;
