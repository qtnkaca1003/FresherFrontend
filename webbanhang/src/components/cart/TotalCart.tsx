import { Box, Button, Td, Tr } from "@chakra-ui/react";
import React, { useContext,  useMemo } from "react";
import { CartContext } from "../../store/CartProvider";

const TotalCart = () => {
  const { state } = useContext(CartContext);
  const { products } = state;
  console.log("có thay đổi hem", products);
 
  const totalPrice = useMemo(() => {
    return (
      products?.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0) ?? 0
    );
  }, [products]);
  return (
    <>
      <Tr>
        <Td>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textAlign={"center"}
          ></Box>
        </Td>
        <Td fontWeight={"bold"}>Total price: </Td>
        <Td isNumeric>{totalPrice}</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textAlign={"center"}
          ></Box>
        </Td>
        <Td fontWeight={"bold"}>Total </Td>
        <Td isNumeric>{totalPrice}</Td>
      </Tr>
      <Tr>
        <Td>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            textAlign={"center"}
          ></Box>
        </Td>
        
        <Td><Button>Continue</Button></Td>
      </Tr>
    </>
  );
};
export default TotalCart;
