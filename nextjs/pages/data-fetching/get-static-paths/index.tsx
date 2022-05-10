import { Box, Container, Text, Wrap } from "@chakra-ui/react";
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
  product: IProduct[];
}
const getDataStaticPaths = ({ product }: IProps) => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box>
          {" "}
          <Text align={"center"} fontSize={"4xl"}>
            Get Static Paths{" "}
          </Text>
        </Box>
        <Wrap mt={"5"} spacing="20px">
          {product.map((item, index) => {
            return (
              <Link href={`/data-fetching/get-static-paths/${item.id}`} key={index}>
                <a>
                  {" "}
                  <CardProduct
                    image={item.image}
                    name={item.title}
                    price={item.price}
                  />
                </a>
              </Link>
            );
          })}
        </Wrap>
      </Container>
    </>
  );
};

export default getDataStaticPaths;

export const getStaticProps = async () => {
  const res = await await fetch("http://localhost:8080/api");
  const data = await res.json();
  return {
    props: {
      product: data.data,
    },
  };
};
