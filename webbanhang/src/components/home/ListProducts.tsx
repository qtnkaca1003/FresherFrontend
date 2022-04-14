import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import React from "react";
import IProduct from "../../models/IProduct";
import ModalProduct from "./ModalProduct";
interface IListProduct {
  products?: IProduct[];
}
const ListProducts = ({ products }: IListProduct) => {
  return (
    <>
      <Container maxW={"container.xl"}>
        <Grid mt={"10"} templateColumns="repeat(3, 1fr)" gap={6}>
          {products?.map((item) => {
            return (
              <GridItem w="100%" h="100%">
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
                    
                  </Box>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default ListProducts;
