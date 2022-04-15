import { FC, useCallback, useContext } from "react";
import ProductCart from "../../components/cart/ProductCart";
import { CartContext } from "../../store/CartProvider";
import Product from "../../models/IProduct";
import {
    Container,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
const Cart: FC = () => {
  const { state, dispatch } = useContext(CartContext);
  const { products } = state;
  console.log(products);

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
    <TableContainer >
      <Table  variant="simple">
        <TableCaption>Cart</TableCaption>
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
  </Container>
  );
};
export default Cart;
