import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react" ;
import { SearchIcon } from "../icons/SearchIcon";

export const CInput = () => {
  return (
    <InputGroup h={"65px"} padding={"7px 12px 7px 30px"}>
      <InputLeftAddon
        p={0}
        border={"none"}
        bg={"#fff"}
        height={"50px"}
        children={<SearchIcon />}
      />
      <Input
        border={"none"}
        focusBorderColor={"none"}
        height={"50px"}
        placeholder="Search for something..."
      />
    </InputGroup>
  );
};
