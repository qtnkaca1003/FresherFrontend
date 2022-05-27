import { Input } from "@chakra-ui/react";
import React from "react";

interface IInput {
  placeholder?: string;
  border?: string;
  defaultValue?: string;
  name?: string;
  id?: string;
  type?: string;
  focusBorderColor?: string;
  width?: string;
  height?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CInput = (props: IInput) => {
  return (
    <Input
      outline={"none"}
      width={props.width}
      height={props.height}
      defaultValue={props.defaultValue}
      name={props.name}
      id={props.id}
      type={props.type}
      onChange={props.onChange}
      border={props.border}
      focusBorderColor={props.focusBorderColor}
      placeholder={props.placeholder}
    />
  );
};
export default CInput;
