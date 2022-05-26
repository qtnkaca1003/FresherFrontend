import { Box } from "@chakra-ui/react";
import React from "react";
import CAvatar from "../card";
import CInput from "../input";
export const Header = () => {
  return (
    <>
      <Box
        boxShadow="2xl"
        maxW={"100vw"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box maxW={"630px"}>
          <CInput placeholder="Search for something..." />
        </Box>
        <CAvatar m={"10px"} src="./image/avatar.jpg" size="md" />
      </Box>
    </>
  );
};
