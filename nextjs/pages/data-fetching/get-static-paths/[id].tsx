import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import CardProduct from "../../../components/CardProduct";
interface IProduct {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
}
interface IProps {
  product: IProduct;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const paths = data.map((product: IProduct) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch("http://localhost:8080/api/" + id);
  const data = await res.json();
  return {
    props: {
      product: data.find,
    },
  };
};
const getDetailProduct = ({ product }: IProps) => { 
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box>
          {" "}
          <Text align={"center"} fontSize={"4xl"}>
            Get Static Paths{" "}
          </Text>
        </Box>

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%">
            <Image
              w={"500px"}
              h={"500px"}
              src={product.image}
              alt={product.title}
            />
          </GridItem>
          <GridItem w="100%">
            <Box mt={"50px"} w={"100%"} borderRadius="lg" overflow="hidden">
              <Text mb={"5"} fontWeight={"bold"}>
                Title: {product.title}
              </Text>
              <Text mb={"5"} fontWeight={"bold"}>
                Discripton: {product.description}
              </Text>
              <Text>Price: {product.price}</Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default getDetailProduct;
