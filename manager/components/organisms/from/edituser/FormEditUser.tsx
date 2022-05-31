import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppSelector } from "../../../../hook";
import { IUser } from "../../../../types/interface";

interface IFormEditUser {
  data: IUser;
}
const CFormEditUser = (props: IFormEditUser) => {
  const { register, handleSubmit } = useForm<IUser>();
  const router = useRouter();

  const user = useAppSelector((state) => state.users.User);
  //console.log(user);
  console.log(user);
  const onSubmit: SubmitHandler<IUser> = (data) => {
    console.log(data);

    /* apiUser.editUser(id, data).then((res) => {
      setUsers(res.data);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }); */
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
              value={props.data.first_name}
              //value={user.first_name}
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
              value={props.data.last_name}
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
            value={props.data.email}
            {...register("email")}
            name="email"
            id="email"
            type="email"
          />
        </FormControl>
        <Button type="submit" mt={5}>
          Update
        </Button>
      </form>
    </Box>
  );
};
export default CFormEditUser;
