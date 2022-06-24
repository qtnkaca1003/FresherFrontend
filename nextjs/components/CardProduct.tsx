import {
  Box,
  Center,
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
      <WrapItem>
        <Box
          maxW={"250px"}
          h={"350px"}
          shadow={"xl"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image w={"250px"} h={"250px"} p='3' src={props.image} alt={props.image} />
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
