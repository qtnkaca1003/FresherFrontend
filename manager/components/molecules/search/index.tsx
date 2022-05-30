import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import CAvatar from "../../atoms/avatar";
import { ArrowDownIcon } from "../../atoms/icons/ArrowDownIcon";
import { SearchIcon } from "../../atoms/icons/SearchIcon";
import CInput from "../../atoms/input";
import CText from "../../atoms/text";
interface ICSearch {
  fontWeight?: string;
  fontSize?: string;
  placeholder?: string;
  padding?: string;
  borderLeft?: string;
  display?: string;
  w?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CSearch = (props: ICSearch) => {
  return (
    <>
      <Box ml={"5"} display={"inline-flex"} alignItems={"center"}>
        <SearchIcon />
        <CInput onChange={props.onChange} border={"none"} placeholder={props.placeholder} />
      </Box>
    </>
  );
};
export default CSearch;
