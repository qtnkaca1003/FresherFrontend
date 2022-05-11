import {
  Box,
  Center,
  Container,
  ListItem,
  Text,
  UnorderedList,
  Wrap,
} from "@chakra-ui/react";
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
const Dynamic = ({ product }: IProps) => {
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
          <Text
            fontWeight={"bold"}
            color={"blue.600"}
            align={"center"}
            fontSize={"3xl"}
          >
            List title product
          </Text>
          <UnorderedList  styleType={"none"}>
            {product.map((item, index) => {
              return (
                <ListItem
               
                  _hover={{
                    color: "blue",
                    bgClip: "text",
                    bgGradient: "linear(to-l, #7928CA, #FF0080)",
                  }}
                  key={index}
                >
                  <Link href={`/api/${item.id}`}>
                    <a><Text fontWeight={"500"} fontSize={"25"}>- {item.title}</Text></a>
                  </Link>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Wrap>
      </Container>
    </>
  );
};

export default Dynamic;

export const getStaticProps = async () => {
  const res = await await fetch("http://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      product: data
    },
  };
};
