import { Box } from "@chakra-ui/react";
import React from "react";
import CDropDown from "../../molecules/dropdownmenu";
import CSearch from "../../molecules/search";
interface IHeader {
  src: string;
  placeholder?: string;
}
export const Header = () => {
  return (
    <>
      <Box
        h={"60px"}
        lineHeight={"60px"}
        boxShadow="2xl"
        bg="white"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <CSearch placeholder="Search for something..." />
        <CDropDown src={"./image/avatar.jpg"} title="Nhan" />
      </Box>
    </>
  );
};
