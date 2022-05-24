import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../hook";
import { IUser } from "../types/interface";

const CFormEditUser = () => {
  const { register, handleSubmit } = useForm<IUser>();
  const user = useAppSelector((state) => state.users.User);
  const onSubmit: SubmitHandler<IUser> = (data) => {
    const dataUser = JSON.stringify(data);
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: "John@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
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
              value={user.name.firstname}
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
              value={user.name.lastname}
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
            value={user.email}
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
              value={user.username}
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
              value={user.password}
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
            value={user.phone}
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
                value={user.address.city}
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
                value={user.address.street}
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
                value={user.address.number}
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
                value={user.address.zipcode}
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
                value={user.address.geolocation.lat}
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
                value={user.address.geolocation.long}
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
