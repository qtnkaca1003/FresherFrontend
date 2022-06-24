import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface IText {
  title?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  textAlign?: string;
  mt?: string | number;
  fontStyle?: string;
  children?:ReactNode;
}
const CText = (textProps: IText) => {
  return (
    <>
      <Text
        mt={textProps.mt}
        className="text"
        fontStyle={textProps.fontStyle}
        fontWeight={textProps.fontWeight}
        color={textProps.color}
        fontSize={textProps.fontSize}
      >
        {textProps.title}
        {textProps.children}
      </Text>
    </>
  );
};
export default CText;
