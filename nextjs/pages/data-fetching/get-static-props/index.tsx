import { Box, Center, Container, Text, Wrap } from "@chakra-ui/react";
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
const getDataStaticProps = ({ product }: IProps) => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box>
          {" "}
          <Text align={"center"} fontSize={"4xl"}>
            Get Static Props{" "}
          </Text>
        </Box>
        <Wrap mt={"5"} spacing="20px">
          {product.map((item, index) => {
            return (
              <Center key={index}>
                <CardProduct
                  image={item.image}
                  name={item.title}
                  price={item.price}
                />
              </Center>
            );
          })}
        </Wrap>
      </Container>
    </>
  );
};

export default getDataStaticProps;

export const getStaticProps = async () => {
  const res = await await fetch("http://localhost:8080/api");
  const data = await res.json();
  return {
    props: {
      product: data.data,
    },
  };
};
