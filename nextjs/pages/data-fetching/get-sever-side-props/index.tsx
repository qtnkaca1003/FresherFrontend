import { Box, Container, Text, Wrap } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import CardProduct from "../../../components/CardProduct";
interface IProduct {
  name?: string;
  path?: string;
  prices?: {price:{ value: number; currencyCode: string }};
  images: [{ url: string; alt: string }];
  id: number;
}
interface IProps {
  product: IProduct[];
}
const getDataSeverSideProps = ({ product }: IProps) => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box>
          {" "}
          <Text align={"center"} fontSize={"4xl"}>
            Get Sever Side Props{" "}
          </Text>
        </Box>
        <Wrap mt={"5"} mb={"5"} spacing="20px">
          {product.map((item, index) => {
            return (
              <CardProduct
                key={index}
                image={item.images[0].url}
                name={item.name}
                price={Number(item.prices?.price.value)}
              />
            );
          })}
        </Wrap>
      </Container>
    </>
  );
};
export default getDataSeverSideProps;
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await await fetch(
    "https://demo.vercel.store/api/catalog/products"
  );
  const data = await res.json();
  return {
    props: {
      product: data.data.products,
    },
  };
};
