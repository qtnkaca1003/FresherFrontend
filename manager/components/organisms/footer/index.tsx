import { Box } from "@chakra-ui/react";
import React from "react";
import CText from "../../atoms/text";

export const Footer = () => {
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
        <CText title="Copyright © 2018 DesignRevision" />
      </Box>
    </>
  );
};
