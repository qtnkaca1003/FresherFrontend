import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import CButtonFl from "../components/buttonfl";
import CAvatar from "../components/card";
import { Footer } from "../components/footer/Footer";
import { IconPlusUser } from "../components/icons/IconUserPlus";
import { Navigation } from "../components/navigation/Navigation";
import CTitle from "../components/title";
import CFormUser from "../stories/FormUser";
import Header from "../stories/Header";

const Home: NextPage = ({ children }: any) => {
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
              <CAvatar size="2xl" src="./images/avatar.jpg" />
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

export default Home;
