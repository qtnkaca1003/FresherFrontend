import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CButtonFl from "../../../components/atoms/button";
import CAvatar from "../../../components/atoms/avatar";
import CFormEditUser from "../../../components/organisms/from/edituser/FormEditUser";
import { IconPlusUser } from "../../../components/atoms/icons/IconUserPlus";
import CTitle from "../../../components/atoms/title";
import { addUser } from "../../../redux/slices/userSlices";
import apiUser from "../../../api/User";
import CButton from "../../../components/atoms/button";
import CEditUser from "../../../components/organisms/main/edituser";
import { useAppDispatch } from "../../../hook";
const EditUser = () => {
  const router = useRouter();
  const id = router.query.id?.toString();
  
  return <CEditUser id={id} />;
};
export default EditUser;
