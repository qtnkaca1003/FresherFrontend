import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiUser from "../../../api/User";
import { useAppSelector } from "../../../hook";
import { IUser } from "../../../types/interface";


const CFormEditUser = () => {
  const { register, handleSubmit } = useForm<IUser>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser>();
  const router = useRouter();
  const user = useAppSelector((state) => state.users.User);
  const id: string | undefined = router.query.id?.toString();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    apiUser.editUser(id, data).then((res) => {
      setUsers(res.data);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    });
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
              readOnly
              defaultValue={user.name.firstname}
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
              readOnly
              defaultValue={user.name.lastname}
              {...register("name.lastname")}
              name="name.lastname"
              id="name.lastname"
              type="text"
            />
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel fontWeight={"normal"} htmlFor="email">
            Email
          </FormLabel>
          <Input
            defaultValue={user.email}
            {...register("email")}
            name="email"
            id="email"
            type="email"
          />
        </FormControl>
        <Box display={"flex"}>
          {" "}
          <FormControl>
            <FormLabel fontWeight={"normal"} htmlFor="username">
              Username
            </FormLabel>
            <Input
              defaultValue={user.username}
              {...register("username")}
              name="username"
              id="username"
              type="text"
            />
          </FormControl>
          <FormControl ml={2}>
            <FormLabel fontWeight={"normal"} htmlFor="password">
              Password
            </FormLabel>
            <Input
              defaultValue={user.password}
              {...register("password")}
              name="password"
              id="password"
              type="password"
            />
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel fontWeight={"normal"} htmlFor="phone">
            Phone
          </FormLabel>
          <Input
            defaultValue={user.phone}
            {...register("phone")}
            name="phone"
            id="phone"
            type="text"
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
                defaultValue={user.address.city}
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
                defaultValue={user.address.street}
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
                readOnly
                defaultValue={user.address.number}
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
                readOnly  
                defaultValue={user.address.zipcode}
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
                defaultValue={user.address.geolocation.lat}
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
                defaultValue={user.address.geolocation.long}
                {...register("address.geolocation.long")}
                name="address.geolocation.long"
                id="address.geolocation.long"
                type="text"
              />
            </FormControl>
          </Box>
        </Box>
        <Button type="submit" mt={5}>
          Edit user
        </Button>
      </form>
    
    </Box>
  );
};
export default CFormEditUser;
