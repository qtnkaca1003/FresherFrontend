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
import { IUser } from "../../types/interface";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const CFormUser = () => {
  const { register, handleSubmit } = useForm<IUser>();

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
    <Box >
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
        <FormControl>
          <FormLabel fontWeight={"normal"} htmlFor="email">
            Email
          </FormLabel>
          <Input {...register("email")} name="email" id="email" type="email" />
        </FormControl>
        <Box display={"flex"}>
          {" "}
          <FormControl>
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
          <FormControl ml={2}>
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
        <FormControl>
          <FormLabel fontWeight={"normal"} htmlFor="phone">
            Phone
          </FormLabel>
          <Input {...register("phone")} name="phone" id="phone" type="number" />
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
  );
};
export default CFormUser;
