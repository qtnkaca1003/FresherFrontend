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
import apiUser from "../../api/User";
import { useAppDispatch } from "../../hook";
import { addNewUser } from "../../redux/slices/userSlices";
import { IUser } from "../../types/interface";
import ModalView from "../modal/modelUser";

const CFormUser = () => {
  const { register, handleSubmit } = useForm<IUser>();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    dispatch(addNewUser(data));
    apiUser.addUser(data).then((res) => {
      if (res.status === 200) {
        setUser(res.data);
        setIsOpen(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      }
    });
  };
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display={"flex"}>
            <FormControl>
              <FormLabel fontWeight={"normal"} htmlFor="name.firstname">
                First Name
              </FormLabel>
              <Input
                {...register("name.firstname")}
                name="name.firstname"
                id="name.firstname"
                type="text"
              />
            </FormControl>
            <FormControl ml={2}>
              <FormLabel fontWeight={"normal"} htmlFor="name.lastname">
                Last Name
              </FormLabel>
              <Input
                {...register("name.lastname")}
                name="name.lastname"
                id="name.lastname"
                type="text"
              />
            </FormControl>
          </Box>
          <FormControl mt={3} isRequired>
            <FormLabel fontWeight={"normal"} htmlFor="email">
              Email
            </FormLabel>
            <Input
              {...register("email")}
              name="email"
              id="email"
              type="email"
            />
          </FormControl>
          <Box display={"flex"}>
            {" "}
            <FormControl mt={3} isRequired>
              <FormLabel fontWeight={"normal"} htmlFor="username">
                Username
              </FormLabel>
              <Input
                {...register("username")}
                name="username"
                id="username"
                type="text"
              />
            </FormControl>
            <FormControl ml={2} mt={3} isRequired>
              <FormLabel fontWeight={"normal"} htmlFor="password">
                Password
              </FormLabel>
              <Input
                {...register("password")}
                name="password"
                id="password"
                type="password"
              />
            </FormControl>
          </Box>
          <FormControl mt={3} isRequired>
            <FormLabel fontWeight={"normal"} htmlFor="phone">
              Phone
            </FormLabel>
            <Input
              {...register("phone")}
              name="phone"
              id="phone"
              type="number"
            />
          </FormControl>
          <Box>
            <Text fontSize={"20px"} fontWeight={"600"} mt={5}>
              Address
            </Text>
            <Box display={"flex"}>
              <FormControl>
                <FormLabel fontWeight={"normal"} htmlFor="city">
                  City
                </FormLabel>
                <Input
                  {...register("address.city")}
                  name="address.city"
                  id="address.city"
                  type="text"
                />
              </FormControl>
              <FormControl ml={2}>
                <FormLabel fontWeight={"normal"} htmlFor="street">
                  Street
                </FormLabel>
                <Input
                  {...register("address.street")}
                  name="address.street"
                  id="address.street"
                  type="text"
                />
              </FormControl>
            </Box>
            <Box display={"flex"}>
              <FormControl>
                <FormLabel fontWeight={"normal"} htmlFor="number">
                  Number
                </FormLabel>
                <Input
                  {...register("address.number")}
                  name="address.number"
                  id="address.number"
                  type="number"
                />
              </FormControl>
              <FormControl ml={2}>
                <FormLabel fontWeight={"normal"} htmlFor="zipcode">
                  Zip-code
                </FormLabel>
                <Input
                  {...register("address.zipcode")}
                  name="address.zipcode"
                  id="address.zipcode"
                  type="text"
                />
              </FormControl>
            </Box>{" "}
            <Box display={"flex"}>
              <FormControl>
                <FormLabel fontWeight={"normal"} htmlFor="lat">
                  Lat
                </FormLabel>
                <Input
                  {...register("address.geolocation.lat")}
                  name="address.geolocation.lat"
                  id="address.geolocation.lat"
                  type="text"
                />
              </FormControl>
              <FormControl ml={2}>
                <FormLabel fontWeight={"normal"} htmlFor="long">
                  Long
                </FormLabel>
                <Input
                  {...register("address.geolocation.long")}
                  name="address.geolocation.long"
                  id="address.geolocation.long"
                  type="text"
                />
              </FormControl>
            </Box>
          </Box>
          <Button type="submit" mt={5}>
            Add user
          </Button>
        </form>
      </Box>
      <ModalView user={user} isOpen={isOpen} />
    </>
  );
};
export default CFormUser;
