import { Box } from "@chakra-ui/react";
import React from "react";
import { CInput } from "../input";
export const Header = () => {
  return (
    <>
      <Box boxShadow="2xl" maxW={"100vw"}>
        <Box maxW={"630px"}>
          <CInput />
        </Box>
      </Box>
    </>
  );
};
