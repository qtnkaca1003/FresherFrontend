import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import CFormProduct from "../../components/form/FormProduct";

const AddProduct = () => {
  
  useEffect(() => {
    const getProduct = () => {
      axios.get("https://fakestoreapi.com/products/"+id).then((res) => {
      });
    };
    getProduct();
  }, [dispatch]);
  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
            {" "}
            Edit Product
          </Text>
        </Box>
        <Box shadow={"2xl"} p={"16px"}>
          <CFormProduct />
        </Box>
      </Box>
    </>
  );
};
export default AddProduct;
