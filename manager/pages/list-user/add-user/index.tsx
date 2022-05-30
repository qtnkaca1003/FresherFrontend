import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import CButtonFl from "../../../components/atoms/button";
import CAvatar from "../../../components/atoms/avatar";
import CFormUser from "../../../components/molecules/forminput/FormUser";
import { IconPlusUser } from "../../../components/atoms/icons/IconUserPlus";
import CTitle from "../../../components/atoms/title";
import { useAppSelector } from "../../../hook";

const AddUser = () => {
  const listUser = useAppSelector((state) => state.users.propsUsers);
  return (
    <>
      <Box padding={"0 24px"}>
        <Box padding={"24px 0"}>
          <Text color={"#3d5170"} fontSize="3xl" fontWeight={"600"}>
            {" "}
            User Profile
          </Text>
        </Box>
        <Grid display={"flex"} templateColumns="repeat(1, 1fr)" gap={6}>
          <GridItem height={"505px"} shadow={"2xl"} borderRadius={5} w="50%">
            {" "}
            <Box
              pt={5}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <CAvatar size="2xl" src="./image/avatar.jpg" />
              <CTitle
                color="#3d5170"
                fontSize="2xl"
                fontWeight="500"
                title="Nhân Quách"
              />
              <CTitle
                color="#868e96"
                fontSize="16px"
                fontWeight="500"
                title="Dev"
              />
              <CButtonFl
                borderRadius="20px"
                fontSize="11px"
                fontWeight="400"
                width="75px"
                height="30px"
                title="Follow"
                icon={<IconPlusUser fill="blue" />}
                color="blue"
              />
            </Box>
          </GridItem>
          <GridItem height={"660px"} shadow={"2xl"} borderRadius={5} w="100%">
            {" "}
            <Box p={"16px"}>
              <Text fontSize={"16px"} fontWeight={"600"}>
                Account Details
              </Text>
              <Divider />
              <CFormUser />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default AddUser;
