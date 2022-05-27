import { Box } from "@chakra-ui/react";
import React from "react";
import CAvatar from "../atoms/avatar";
import CSearch from "../atoms/input";
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
