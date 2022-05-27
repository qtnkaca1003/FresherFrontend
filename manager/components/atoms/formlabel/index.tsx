import { FormLabel } from "@chakra-ui/react";
import React from "react";

interface IFormlabel {
  htmlFor?: string;
}
const CFormlabel = (props: IFormlabel) => {
  return <FormLabel htmlFor={props.htmlFor}>Email address</FormLabel>;
};
export default CFormlabel;
