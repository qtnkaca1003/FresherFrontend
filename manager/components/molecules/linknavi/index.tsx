import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import CLink from "../../atoms/link";
interface ICLinknavi {
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  icon?: ReactNode;
  link: string;
  title: string;
  id?: string;
  padding?: string;
  borderLeft?: string;
  display?: string;
  lineHeight?: string;
  w?: string;
  _hover?: {};
}
const CLinknavi = (props: ICLinknavi) => {
  return (
    <>
      <Box
        padding={props.padding}
        borderLeft={props.borderLeft}
        display={props.display}
        lineHeight={props.lineHeight}
        w={props.w}
        _hover={props._hover}
      >
        <Box>{props.icon}</Box>
        <CLink
         
          color={props.color}
          fontSize={props.fontSize}
          fontWeight={props.fontWeight}
          title={props.title}
          link={props.link}
        />
      </Box>
    </>
  );
};
export default CLinknavi;
