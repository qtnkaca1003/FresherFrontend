import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CFormProduct from "../../../components/molecules/form/FormProduct";

const AddProduct = () => {
  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
            {" "}
            Add Product
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
