import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CButtonFl from "../../../components/atoms/button";
import CAvatar from "../../../components/atoms/avatar";

import { IconPlusUser } from "../../../components/atoms/icons/IconUserPlus";
import CTitle from "../../../components/atoms/title";
import { addUser } from "../../../redux/slices/userSlices";
import apiUser from "../../../api/User";
import CButton from "../../../components/atoms/button";
import CCard from "../../molecules/card";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { IUser } from "../../../types/interface";
import CFormEditUser from "../from/edituser/FormEditUser";
interface IEditUser {
  id: string | undefined;
}
const CEditUser = (props: IEditUser) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUser = async () => {
      apiUser.getUser(props.id).then((res) => {
        dispatch(addUser(res.data.data));
      });
    };
    getUser();
  });
  const user = useAppSelector((state) => state.users.User);
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
            <CCard
              fontWeightTitle={"500"}
              srcAvatar={user.avatar}
              sizeAvatar={"2xl"}
              titleTitle={user.first_name + " " + user.last_name}
            />
          </GridItem>
          <GridItem shadow={"2xl"} borderRadius={5} w="100%">
            {" "}
            <Box p={"16px"}>
              <Text fontSize={"2xl"} fontWeight={"600"}>
                {" "}
                Account Details dđ
              </Text>
              <CFormEditUser data={user} />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default CEditUser;
