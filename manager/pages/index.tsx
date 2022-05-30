import type { NextPage } from "next";
import { useEffect } from "react";
import apiProduct from "../api/Product";
import { useAppDispatch } from "../hook";
import { addCategory, addProduct } from "../redux/slices/productSlices";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getAllProduct = () => {
      apiProduct.getAll().then((res) => {
        dispatch(addProduct(res.data));
      });
    };
    const getAllCategory = () => {
      apiProduct.getCategory().then((res) => {
        dispatch(addCategory(res.data));
      });
    };
    /*  const getAllUser = () => {
      apiUser.getAll().then((res) => {
        dispatch(addUser(res.data));
      });
    }; */
    getAllCategory();
    getAllProduct();
    //getAllUser();
  });
  return <></>;
};

export default Home;
