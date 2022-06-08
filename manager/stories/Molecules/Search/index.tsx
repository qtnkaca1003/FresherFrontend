import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { SearchIcon } from "../../../components/atoms/icons/SearchIcon";
import CInput from "../../Atoms/Input/input";

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
const CSearch = (searchProps: ICSearch) => {
  return (
    <>
      <Box ml={"5"} display={"inline-flex"} alignItems={"center"}>
        <SearchIcon />
        <CInput onChange={searchProps.onChange} border={"none"} placeholder={searchProps.placeholder} />
      </Box>
    </>
  );
};
export default CSearch;
