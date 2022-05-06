import {
    Box,
    Image,
    ListItem,
    Text,
    UnorderedList,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
  import Link from "next/link";
  
  interface ICardProduct {
    id?: number;
    image?: string;
    title?: string;
    name?: string;
    price: number;
    data?: [{ description: string; id: number; path: string }];
  }
  
  const CardProduct = (props: ICardProduct) => {
    return (
      <WrapItem textAlign={"center"}>
        <Box
          maxW={"250px"}
          h={"350px"}
          shadow={"xl"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          {" "}
          <Text mt={"1"} textAlign={"center"} fontWeight={"bold"}>
            {props.title}{" "}
          </Text>
          <UnorderedList ml={"10"}>
            {props.data?.map((item) => {
              return (
                <ListItem key={item.id}>
                  {" "}
                  <Link href={{ pathname: `${item.path}` }} passHref>
                    <a>{item.description}</a>
                  </Link>
                </ListItem>
              );
            })}
          </UnorderedList>
          <Image w={"230px"} /* h={"230px"} */ src={props.image} alt={props.image} />
          <Box>
            <Text mb={"1"} textAlign={"center"} fontWeight={"bold"}>
              {props.name}{" "}
            </Text>
  
            <Text mb={"5"} textAlign={"center"} fontWeight={"bold"}>
              {""}
              {props.price}{" "}
            </Text>
          </Box>
        </Box>
      </WrapItem>
    );
  };
  export default CardProduct;
  