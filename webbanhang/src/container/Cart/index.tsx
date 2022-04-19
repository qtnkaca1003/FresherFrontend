import { FC, useCallback, useContext } from "react";
import ProductCart from "../../components/cart/ProductCart";
import { CartContext } from "../../store/CartProvider";
import Product from "../../models/IProduct";
import {
  Container,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import TotalCart from "../../components/cart/TotalCart";
const Cart: FC = () => {
  const { state, dispatch } = useContext(CartContext);
  const { products } = state;
 

  const handleDelete = useCallback(
    (product: Product) => () => {
      dispatch({
        type: "REMOVE_CART",
        payload: product,
      });
    },
    [dispatch]
  );
  return (
    <Container
      d={"flex"}
      justifyContent={"space-between"}
      maxW={"container.xl"}
    >
      <TableContainer>
        <Text align={"center"} fontSize="3xl">
          Cart
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>PRODUCT</Th>
              <Th>QUANTITY</Th>
              <Th isNumeric>PRICE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.map((product, index) => (
              <ProductCart
                product={product}
                handleDelete={handleDelete}
                key={index}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Text align={"center"} fontSize="3xl">
          Total
        </Text>
        <Table variant="simple">
          <Tbody>
            <TotalCart />
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default Cart;
