import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../../api/User";
import { useAppDispatch } from "../../../../hook";
import { addToken } from "../../../../redux/slices/userSlices";
import { IAccount } from "../../../../types/interface";
import CButton from "../../../atoms/button";
const CFormRegister = () => {
  const { register, handleSubmit } = useForm<IAccount>();
  const [Error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IAccount> = (data) => {
    if (data.password === data.confirmpassword) {
      setError(false);
      apiUser
        .register(data)
        .then((res) => {
          dispatch(addToken(res.data));
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert(error.response.data.error);
          }
        });
    } else {
      setError(true);
    }
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
                required
                {...register("email")}
                name="email"
                id="emailregister"
                type="email"
              />
            </FormControl>
          </Box>
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
          <Box textAlign={"center"}>
            <CButton
              color={"#fff"}
              colorScheme={"blue"}
              title={"Register"}
              type="submit"
              mt={5}
            />
          </Box>
        </form>
      </Box>
    </>
  );
};
export default CFormRegister;
