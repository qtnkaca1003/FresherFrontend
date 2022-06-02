import { Box, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppDispatch } from "../../../../hook";
import { addToken } from "../../../../redux/slices/userSlices";
import { IAccount } from "../../../../types/interface";
import CButton from "../../../atoms/button";
const CFormLogin = () => {
  const { register, handleSubmit } = useForm<IAccount>();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IAccount> = (data) => {
    apiUser.login(data).then((res) => {
      dispatch(addToken(res.data));
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
