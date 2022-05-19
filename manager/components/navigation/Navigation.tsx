import { Box } from "@chakra-ui/react";
import React from "react";
import Home from "../home";
import LinkNavigation from "../link/LinkNavigation";

export const Navigation = () => {
  return (
    <>
      <Box minH={"100vh"} boxShadow="2xl" bg="white" w={"320px"}>
        <Home />
        <LinkNavigation />
      </Box>
    </>
  );
};
