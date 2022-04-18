import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import IProduct from "../../models/IProduct";
import { CartContext } from "../../store/CartProvider";
import ModalProduct from "./ModalProduct";
interface IListProduct {
  products?: IProduct[];
}
const ListProducts = ({ products }: IListProduct) => {
  const { state, dispatch } = useContext(CartContext);
  const products1 = state;
  console.log(products1);

  return (
    <>
      <Container maxW={"container.xl"}>
        <Grid mt={"10"} templateColumns="repeat(3, 1fr)" gap={6}>
          {products && products.length ? (
            products?.map((item) => {
              return (
                <GridItem key={item.id} w="100%" h="100%">
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
                      src={item.image}
                      alt={item.image}
                      cursor={"pointer"}
                    />
                    <Box p="6">
                      <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                      >
                        {item.title}
                      </Box>
                      <Box fontSize="2xl" fontWeight={"bold"}>
                        {item.price} $
                      </Box>
                      <Box display="flex" mt="2" alignItems="center"></Box>
                    </Box>
                    <Box>
                      <ModalProduct item={item} />
                      <Button
                        mb={"10"}
                        onClick={function () {
                          dispatch({ type: "ADD_CART", payload: item });
                        }}
                      >
                        Add to cart
                      </Button>
                    </Box>
                  </Box>
                </GridItem>
              );
            })
          ) : (
            <>
              <Grid mt={"10"} templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem ml={"20"}>
                  <Skeleton width="350px" height="600px" />
                </GridItem>
                <GridItem>
                  <Skeleton width="350px" height="600px" />
                </GridItem>
                <GridItem>
                  <Skeleton width="350px" height="600px" />
                </GridItem>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
};
export default ListProducts;
