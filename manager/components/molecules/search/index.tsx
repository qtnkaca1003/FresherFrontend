import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { SearchIcon } from "../../atoms/icons/SearchIcon";
import CInput from "../../atoms/input";

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
