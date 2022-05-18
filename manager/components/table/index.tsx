import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { IProduct } from "../../types/interface";
const user = {
  id: 1,
  email: "John@gmail.com",
  username: "johnd",
  password: "m38rmF$",
  name: {
    firstname: "John",
    lastname: "Doe",
  },
  address: {
    city: "kilcoole",
    street: "7835 new road",
    number: 3,
    zipcode: "12926-3874",
    geolocation: {
      lat: "-37.3159",
      long: "81.1496",
    },
  },
  phone: "1-570-236-7033",
};
interface IProps {
  product: IProduct;
}
export const CTable = (props: IProps) => {
  return (
    <>
      <Td p={"12px"}>{props.product.id}</Td>
      <Td p={"12px"}>{props.product.title.slice(0, 5)}</Td>
      <Td p={"12px"}>{props.product.category}</Td>
      <Td p={"12px"}>{props.product.description.slice(0, 10)}</Td>
      <Td p={"12px"}>{props.product.price}</Td>
      {/* <Td>{user.phone}</Td> */}
      <Td p={"12px"}>
        <Button mr={5}>Edit</Button>
        <Button>Delete</Button>
      </Td>
    </>
  );
};
