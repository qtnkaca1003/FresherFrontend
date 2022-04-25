import { Text } from "@chakra-ui/react";
import React from "react";
import ListProducts from "../components/home/ListProducts";
import {  useAppSelector } from "../hook";
const HomePage = () => {
  const listProduct = useAppSelector((state) => state.listProduct.productList);
  const allProduct = Object.assign([], ...listProduct);
  return (
    <>
      <Text fontSize="4xl" fontWeight={"bold"} align={"center"}>
        Danh sách sản phẩm
      </Text>
      <ListProducts products={allProduct} />
    </>
  );
};
export default HomePage;
