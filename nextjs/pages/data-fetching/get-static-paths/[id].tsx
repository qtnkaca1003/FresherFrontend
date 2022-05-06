import { Box, Container, Text, Wrap } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Card from "../../../components/Card";
interface IProduct {
  name: string;
  description: string;
  path: string;
  prices: { price: { value: string; currencyCode: string } };
  images: [
    {
      url: string;
    }
  ];
  id: string;
}
interface IProps {
  product: IProduct[];
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await await fetch(
    "https://demo.vercel.store/api/catalog/products"
  );
  const data = await res.json();
  const paths = data.data.products.map((product: IProduct) => {
    return {
      params: {
        id: product.path,
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
  const res = await fetch(
    "https://demo.vercel.store/api/catalog/products" + id
  );
  const data = await res.json();
  console.log(id);

  return {
    props: {
      user: data.data.products,
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
        <Wrap mt={"5"} spacing="20px">
          {product.map((item) => {
            return (
              <Link
                href={"/data-fetching/get-static-paths/" + item.id}
                key={item.id}
              >
                <a>
                  {" "}
                  <Card
                    image={item.images[0].url}
                    name={item.name}
                    prices={item.prices}
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

export default getDetailProduct;
