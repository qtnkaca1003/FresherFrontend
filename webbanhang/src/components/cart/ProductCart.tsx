import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Td, Tr } from "@chakra-ui/react";
import React, { FC, memo, useContext } from "react";
import Product from "../../models/IProduct";
import { CartContext } from "../../store/CartProvider";
interface Props {
  product: any;
  handleDelete: (product: Product) => () => void;
  handleChange?: (
    product: Product
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ProductCart: FC<Props> = ({ product, handleDelete, handleChange }) => {
  const { dispatch } = useContext(CartContext);
  const handleButtonPlus = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: "ADD_CART", payload: product });
  };
  const handelButtonMinus = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: "DEL_CART", payload: product });
  };
  return (
    <Tr key={product.id}>
      <Td>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          textAlign={"center"}
        >
          <Image
            ml={"20"}
            boxSize="250px"
            src={product.image}
            alt={product.image}
            cursor={"pointer"}
          />
        </Box>
      </Td>
      <Td>
        <Button onClick={handelButtonMinus} mr={"5"}>
          <MinusIcon />
        </Button>{" "}
        {product.quantity}{" "}
        <Button onClick={handleButtonPlus} ml={"5"}>
          <AddIcon />
        </Button>{" "}
      </Td>
      <Td isNumeric>{product.price}</Td>
      <Td>
        <Button onClick={handleDelete(product)}>Xoá</Button>
      </Td>
    </Tr>
  );
};
export default memo(ProductCart);
