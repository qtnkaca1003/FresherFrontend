import { Box, Container, Text, Wrap } from "@chakra-ui/react";
import Link from "next/link";
import Card from "../../../components/Card";
interface IProduct {
  id?: number;
  image?: string;
  title?: string;
  name?: string;
  price: number;
  data?: [{ description: string; id: number; path: string }];
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
          {product.map((item) => {
            return (
              <Link
                href={"/data-fetching/get-static-paths/"}
                key={item.id}
              >
                <a>
                  {" "}
                  <Card
                    image={item.image}
                    name={item.name}
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
