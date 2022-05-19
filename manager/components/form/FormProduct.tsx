import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProduct } from "../../types/interface";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const CFormProduct = () => {
  const { register, handleSubmit } = useForm<IProduct>();

  const onSubmit: SubmitHandler<IProduct> = (data) => {
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
        <Box>
          {/* <FormControl>
            <FormLabel fontWeight={"normal"} htmlFor="name.firstname">
              First Name
            </FormLabel>
            <Input
              {...register("name.firstname")}
              name="name.firstname"
              id="name.firstname"
              type="text"
            />
          </FormControl> */}
          <FormControl mt={3} pr={5}>
            <FormLabel fontWeight={"normal"} htmlFor="title">
              Title
            </FormLabel>
            <Input {...register("title")} name="title" id="title" type="text" />
          </FormControl>
        </Box>
        <FormControl mt={3} pr={5}>
          <FormLabel fontWeight={"normal"} htmlFor="price">
            Price
          </FormLabel>
          <Input {...register("price")} name="price" id="price" type="text" />
        </FormControl>

        <FormControl mt={3} pr={5}>
          <FormLabel fontWeight={"normal"} htmlFor="category">
            Category
          </FormLabel>
          <Input
            {...register("category")}
            name="category"
            id="category"
            type="text"
          />
        </FormControl>
        <FormControl mt={3} pr={5}>
          <FormLabel fontWeight={"normal"} htmlFor="description">
            Description
          </FormLabel>
          <Textarea placeholder="Description..." />
        </FormControl>
        <FormControl mt={3} pr={5}>
          <FormLabel fontWeight={"normal"} htmlFor="image">
            Image
          </FormLabel>
          <Input
            border={"none"}
            {...register("image")}
            name="image"
            id="image"
            type="file"
          />
        </FormControl>

        <Button bg={"blue.300"} type="submit" mt={5}>
          Add product
        </Button>
      </form>
    </Box>
  );
};
export default CFormProduct;
