import { Box, Divider, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import React from "react";
import CText from "../../atoms/text";
import CFormAddUser from "../form/adduser";
const CAddUser = () => {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "#fff" : "#3d5170";
  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <CText color={color} fontSize="3xl" fontWeight={"600"}>
            {" "}
            Add User
          </CText>
        </Box>
        <Grid display={"flex"} templateColumns="repeat(1, 1fr)" gap={6}>
          <GridItem height={"660px"} shadow={"2xl"} borderRadius={5} w="100%">
            {" "}
            <Box p={"16px"}>
              <CText fontSize={"16px"} fontWeight={"600"}>
                Account
              </CText>
              <Divider />
              <CFormAddUser />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default CAddUser;
