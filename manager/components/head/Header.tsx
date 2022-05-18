import { Box } from "@chakra-ui/react";
import React from "react";
import { CInput } from "../input";
export const Header = () => {
  return (
    <>
      <Box boxShadow="2xl" w={"100%"}>
        <Box w={"630px"}>
          <CInput />
        </Box>
      </Box>
    </>
  );
};
