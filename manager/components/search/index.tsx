import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "../icons/SearchIcon";

interface IInput {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CSearch = (props: IInput) => {
  return (
    <InputGroup h={"65px"} padding={"7px 12px 7px 30px"}>
      <InputLeftAddon
        p={0}
        border={"none"}
        bg={"#fff"}
        height={"50px"}
        //children={<SearchIcon />}
      />
      <Input
        onChange={props.onChange}
        border={"none"}
        focusBorderColor={"none"}
        height={"50px"}
        placeholder={props.placeholder}
      />
    </InputGroup>
  );
};
export default CSearch;
