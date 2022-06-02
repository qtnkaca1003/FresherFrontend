import { Text } from "@chakra-ui/react";
import React from "react";
interface IText {
  title?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  textAlign?: string;
  mt?:string|number
  fontStyle?:string
}
const CText = (props: IText) => {
  return (
    <>
      <Text
      mt={props.mt}
        className="text"
        fontStyle={props.fontStyle}
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
