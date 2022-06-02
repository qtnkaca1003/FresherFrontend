import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { addCreateUser } from "../../../../redux/slices/userSlices";
import { IAccount } from "../../../../types/interface";
import CFormlabel from "../../../atoms/formlabel";
import TCreate from "../../../molecules/table/TCreate";

const CFormAddUser = () => {
  const { register, handleSubmit } = useForm<IAccount>();
  const [Error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.createUser);
  const onSubmit: SubmitHandler<IAccount> = (data) => {
    if (data.password === data.confirmpassword) {
      setError(false);
      apiUser.addUser(data).then((res) => {
        dispatch(addCreateUser(res.data));
      });
    } else {
      setError(true);
    }
  };
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display={"flex"}>
            <FormControl isRequired>
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
            <FormControl isRequired ml={2}>
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
            <FormControl isRequired>
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
          </Box>
          <Box display={"flex"}>
            <FormControl isRequired mt={3} pr={5}>
              <FormLabel fontWeight={"normal"} htmlFor="password">
                Password
              </FormLabel>
              <Input
                required
                {...register("password")}
                name="password"
                id="passwordregister"
                type="password"
              />
            </FormControl>
            <FormControl isRequired mt={3} pr={5}>
              <FormLabel fontWeight={"normal"} htmlFor="password">
                Confirm Password
              </FormLabel>
              <Input
                required
                {...register("confirmpassword")}
                name="confirmpassword"
                id="confirmpassword"
                type="password"
              />
              {Error === true ? (
                <Text color={"red"}>
                  Password and Confirm Password do mot match !!!
                </Text>
              ) : (
                <></>
              )}
            </FormControl>
          </Box>
          <Button type="submit" mt={5}>
            Create User
          </Button>
        </form>
      </Box>
      <Box>
      <TCreate data={users} />
      </Box>
    </>
  );
};
export default CFormAddUser;
