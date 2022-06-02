import {
  Box,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppDispatch } from "../../../../hook";
import {  addUserEdit } from "../../../../redux/slices/userSlices";
import { IUser } from "../../../../types/interface";
import CButton from "../../../atoms/button";

interface IFormEditUser {
  data: IUser;
}
const CFormEditUser = (props: IFormEditUser) => {
  const { register, handleSubmit } = useForm<IUser>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    if (data.email == "" && data.first_name == "" && data.last_name == "") {
      data.email = props.data.email;
      data.first_name = props.data.first_name;
      data.last_name = props.data.last_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email !== "" &&
      data.first_name == "" &&
      data.last_name == ""
    ) {
      data.first_name = props.data.first_name;
      data.last_name = props.data.last_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email == "" &&
      data.first_name !== "" &&
      data.last_name == ""
    ) {
      data.email = props.data.email;
      data.last_name = props.data.last_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email == "" &&
      data.first_name == "" &&
      data.last_name !== ""
    ) {
      data.email = props.data.email;
      data.first_name = props.data.first_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email !== "" &&
      data.first_name !== "" &&
      data.last_name == ""
    ) {
      data.last_name = props.data.last_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email == "" &&
      data.first_name !== "" &&
      data.last_name !== ""
    ) {
      data.email = props.data.email;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else if (
      data.email !== "" &&
      data.first_name == "" &&
      data.last_name !== ""
    ) {
      data.first_name = props.data.first_name;
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    } else {
      apiUser.editUser(data).then((res) => {
        dispatch(addUserEdit(res.data));
      });
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={"flex"}>
          <FormControl>
            <FormLabel fontWeight={"normal"} htmlFor="name.firstname">
              First Name
            </FormLabel>

            <Input
              defaultValue={props.data.first_name}
              {...register("first_name")}
              name="first_name"
              id="first_name"
              type="text"
            />
          </FormControl>
          <FormControl ml={2}>
            <FormLabel fontWeight={"normal"} htmlFor="name.lastname">
              Last Name
            </FormLabel>
            <Input
              defaultValue={props.data.last_name || ""}
              {...register("last_name")}
              name="last_name"
              id="last_name"
              type="text"
            />
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel fontWeight={"normal"} htmlFor="email">
            Email
          </FormLabel>
          <Input
            defaultValue={props.data.email || ""}
            {...register("email")}
            name="email"
            id="email"
            type="email"
          />
        </FormControl>
       
        <CButton colorScheme="blue" type="submit" mt={5} title="Update"/>
          
      
      </form>
    </Box>
  );
};
export default CFormEditUser;
