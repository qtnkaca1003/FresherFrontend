import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import CButtonFl from "../../atoms/button";
import CAvatar from "../../atoms/avatar";
import CFormUser from "../form/adduser";
import { IconPlusUser } from "../../atoms/icons/IconUserPlus";
import CTitle from "../../atoms/title";
import { useAppSelector } from "../../../hook";
import CFormAddUser from "../form/adduser";

const CAddUser = () => {
  const listUser = useAppSelector((state) => state.users.propsUsers);
  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
            {" "}
            Add User
          </Text>
        </Box>
        <Grid display={"flex"} templateColumns="repeat(1, 1fr)" gap={6}>
          <GridItem height={"660px"} shadow={"2xl"} borderRadius={5} w="100%">
            {" "}
            <Box p={"16px"}>
              <Text fontSize={"16px"} fontWeight={"600"}>
                Account
              </Text>
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
