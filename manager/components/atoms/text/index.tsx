import { Text } from "@chakra-ui/react";
import React from "react";

interface IText {
  title?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  textAlign?: string;
}
const CText = (props: IText) => {
  return (
    <>
      <Text
        className="text"
        fontWeight={props.fontWeight}
        color={props.color}
        fontSize={props.fontSize}
      >
        {props.title}
      </Text>
    </>
  );
};
export default CText;
