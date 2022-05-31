import { Box } from "@chakra-ui/react";
import React from "react";
import CText from "../../atoms/text";
interface IFooter {
  position?: any;
  right?: number;
  top?: number |string;
  left?: number;
  bottom?: number;
  mt?: string;
  minHeight?:string |number
}
export const Footer = (props: IFooter) => {
  return (
    <Box
      mt={props.mt}
      minHeight={props.minHeight}
      position={props.position}
      top={props.top}
      left={props.left}
      bottom={props.bottom}
      right={props.right}
      h={"60px"}
      lineHeight={"60px"}
      boxShadow="2xl"
      bg="white"
      width={"100%"}
      textAlign={"center"}
    >
      <CText textAlign="center" title="Copyright © 2018 DesignRevision" />
    </Box>
  );
};
