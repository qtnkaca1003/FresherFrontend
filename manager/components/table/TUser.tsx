import { Button, Td } from "@chakra-ui/react";
import React from "react";
import { IUser } from "../../types/interface";
interface IProps {
  user: IUser;
}
export const TUser = (props: IProps) => {
  return (
    <>
      <Td p={"12px"}>{props.user.id}</Td>
      <Td p={"12px"}>{props.user.name.firstname}</Td>
      <Td p={"12px"}>{props.user.name.lastname}</Td>
      <Td p={"12px"}>{props.user.address.city}</Td>
      <Td p={"12px"}>{props.user.address.street}</Td>
      <Td p={"12px"}>{props.user.address.zipcode}</Td>
      <Td p={"12px"}>{props.user.phone}</Td>
      <Td p={"12px"}>
        <Button mr={5}>Edit</Button>
        <Button>Delete</Button>
      </Td>
    </>
  );
};
