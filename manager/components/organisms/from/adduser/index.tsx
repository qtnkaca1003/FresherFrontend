import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { addUsers } from "../../../../redux/slices/userSlices";

import { IUser } from "../../../../types/interface";
import CFormlabel from "../../../atoms/formlabel";

const CFormAddUser = () => {
  const { register, handleSubmit } = useForm<IUser>();
  const dispatch =useAppDispatch();
  const users = useAppSelector((state) => state.users.propsUsers);
  const onSubmit: SubmitHandler<IUser> = (data) => {    
     apiUser.addUser(data).then((res) => {
      console.log(res.data);
      dispatch(addUsers(res.data));
    });
  };
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display={"flex"}>
            <FormControl>
              <CFormlabel
                textformlabel="First name"
                fontSize={"15px"}
                fontWeight={"normal"}
                htmlFor="firstname"
              />

              <Input
                className="form-control"
                {...register("first_name")}
                name="first_name"
                id="first_name"
                type="text"
              />
            </FormControl>
            <FormControl ml={2}>
              <CFormlabel
                textformlabel="Last name"
                fontSize={"15px"}
                fontWeight={"normal"}
                htmlFor="first_name"
              />
              <Input
                className="form-control"
                {...register("last_name")}
                name="last_name"
                id="last_name"
                type="text"
              />
            </FormControl>
          </Box>
          <Box display={"flex"}>
            <FormControl>
              <CFormlabel
                textformlabel="Email"
                fontSize={"15px"}
                fontWeight={"normal"}
                htmlFor="email"
              />

              <Input
                className="form-control"
                {...register("email")}
                name="email"
                id="email"
                type="email"
              />
            </FormControl>
            <FormControl ml={2}>
              <CFormlabel
                textformlabel="Password"
                fontSize={"15px"}
                fontWeight={"normal"}
                htmlFor="password"
              />
              <Input
                className="form-control"
                {...register("password")}
                name="password"
                id="password"
                type="password"
              />
            </FormControl>
          </Box>

          <Button type="submit" mt={5}>
            Create User
          </Button>
        </form>
      </Box>
      {/*  <ModalView user={user} isOpen={isOpen} /> */}
    </>
  );
};
export default CFormAddUser;
