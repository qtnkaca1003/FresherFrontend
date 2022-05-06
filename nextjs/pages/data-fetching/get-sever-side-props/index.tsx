import { Box, Container, Text, Wrap } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import CardProduct from "../../../components/CardProduct";

interface IProduct {
  title: string;
  description: string;
  price: number;
  image: string;
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
        <Wrap mt={"5"} spacing="20px">
          {product.map((item) => {
            return (
              <CardProduct
                key={item.id}
                image={item.image}
                name={item.title}
                price={item.price}
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
  const res = await await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      product: data,
    },
  };
};
