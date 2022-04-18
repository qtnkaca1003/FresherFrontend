import { Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ListProducts from "../components/home/ListProducts";
import {addProduct} from "../redux/reducer/PostReducer"
import { useAppDispatch } from "../hook";
import IProduct from "../models/IProduct";
const HomePage = () => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(addProduct(res.data))
      setProducts(res.data);
    });
  },[]);
  return (
    <>
      <Text fontSize="4xl" fontWeight={"bold"} align={"center"}>
        Danh sách sản phẩm
      </Text>
      <ListProducts
        products={products}
      />
    </>
  );
};
export default HomePage;
