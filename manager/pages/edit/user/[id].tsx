import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CButtonFl from "../../../components/buttonfl";
import CAvatar from "../../../components/card";
import CFormEditUser from "../../../components/form/FormEditUser";
import { IconPlusUser } from "../../../components/icons/IconUserPlus";
import CTitle from "../../../components/title";
import { User1 } from "../../../redux/slices/userSlices";
const EditUser = () => {
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      axios.get("https://fakestoreapi.com/users/" + id).then((res) => {
        dispatch(User1(res.data));
        //console.log(res.data);
      });
    };
    getUser();
  });

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
          <GridItem shadow={"2xl"} borderRadius={5} w="50%">
            {" "}
            <Box
              pt={5}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <CAvatar size="2xl" src="/image/avatar.jpg" />
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
          <GridItem shadow={"2xl"} borderRadius={5} w="100%">
            {" "}
            <Box p={"16px"}>
              <Text fontSize={"2xl"} fontWeight={"600"}>
                {" "}
                Account Details
              </Text>
              <CFormEditUser />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default EditUser;
