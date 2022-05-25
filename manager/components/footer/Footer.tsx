import { Box, Text } from "@chakra-ui/react";
import React from "react";
export const Footer = () => {
  return (
    <>
      <Box borderTop={"1px solid #e1e5eb"} shadow={"dark-lg"} bg={"#fff"} mt={"22px"} maxW={"100vw"}>
        <Box maxW={"100vw"} h={"60px"}>
          <Text p={5} textAlign={"center"}>Copyright © 2018 DesignRevision</Text>
        </Box>
      </Box>
    </>
  );
};
