import { Box } from "@chakra-ui/react";
import React from "react";
import CAvatar from "../card";
import CSearch from "../search";
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
          <CSearch border="none" placeholder="Search for something..." />
        </Box>
        <CAvatar m={"10px"} src="./image/avatar.jpg" size="md" />
      </Box>
    </>
  );
};
