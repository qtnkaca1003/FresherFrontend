import { FormLabel } from "@chakra-ui/react";
import React from "react";

interface IFormlabel {
  htmlFor?: string;
  textformlabel: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  
}
const CFormlabel = (props: IFormlabel) => {
  return (
    <FormLabel
      htmlFor={props.htmlFor}
      fontWeight={props.fontWeight}
      color={props.color}
      fontSize={props.fontSize}
    >
      {props.textformlabel}
    </FormLabel>
  );
};
export default CFormlabel;
