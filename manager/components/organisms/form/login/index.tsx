import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppDispatch } from "../../../../hook";
import { addToken } from "../../../../redux/slices/userSlices";
import { IAccount } from "../../../../types/interface";
import CButton from "../../../atoms/button";
const CFormLogin = () => {
  const { register, handleSubmit } = useForm<IAccount>();
  const dispatch = useAppDispatch();
  const [Error, setError] = useState<boolean>(false);
  const [textError, setTextError] = useState<string>();
  const onSubmit: SubmitHandler<IAccount> = (data) => {
    apiUser
      .login(data)
      .then((res) => {
        setError(false);
        dispatch(addToken(res.data));
      })
      .catch((error) => {
        setError(true);
        if (error.response.status === 400)
          setTextError(error.response.data.error);
        //console.log("Hi config response ", error.response.status);
      });
  };
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <FormControl isRequired mt={3} pr={5}>
              <FormLabel fontWeight={"normal"} htmlFor="title">
                Email
              </FormLabel>
              <Input
                {...register("email")}
                name="email"
                id="email"
                type="email"
              />
            </FormControl>
          </Box>
          <FormControl isRequired mt={3} pr={5}>
            <FormLabel fontWeight={"normal"} htmlFor="password">
              Password
            </FormLabel>
            <Input
              {...register("password")}
              name="password"
              id="password"
              type="password"
            />
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </FormControl>
          {Error === true ? <Text color={"red"}>{textError}</Text> : <></>}
          <Box textAlign={"center"}>
            <CButton
              color={"#fff"}
              colorScheme={"blue"}
              title={"Login"}
              type="submit"
              mt={5}
            />
          </Box>
        </form>
      </Box>
    </>
  );
};
export default CFormLogin;
