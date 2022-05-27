import { Avatar, WrapItem } from "@chakra-ui/react";
import React from "react";
interface ICard {
  size?: string;
  src: string;
  m?:string
}
const CAvatar = (props: ICard) => {
  return (
    <>
      <WrapItem>
        <Avatar m={props.m} size={props.size} src={props.src} />{" "}
      </WrapItem>
    </>
  );
};
export default CAvatar;
