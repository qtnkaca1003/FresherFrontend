import { Box, Button, Image, Td, Tr } from "@chakra-ui/react";
import React, { FC, memo } from "react";
import Product from "../../models/IProduct";

interface Props {
  product: any;
  handleDelete: (product: Product) => () => void;
  handleChange?: (
    product: Product
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ProductCart: FC<Props> = ({ product, handleDelete, handleChange }) => {
  console.log(product.title);

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
      <Td>{product.quantity}</Td>
      <Td isNumeric>{product.price}</Td>
      <Td>
        <Button onClick={handleDelete(product)}>Xoá</Button>
      </Td>
    </Tr>
  );
};
export default memo(ProductCart);
