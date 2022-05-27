import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiProduct from "../api/Product";
import { IProduct } from "../types/interface";
import ModalViewProduct from "../components/modal/modalProduct";

const CFormProduct = () => {
  const { register, handleSubmit } = useForm<IProduct>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct>();
  const onSubmit: SubmitHandler<IProduct> = (data) => {
    apiProduct.addProduct(data).then((res) => {
      setProduct(res.data);
      setIsOpen(true);

      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    });
  };
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <FormControl mt={3} pr={5}>
              <FormLabel fontWeight={"normal"} htmlFor="title">
                Title
              </FormLabel>
              <Input
                {...register("title")}
                name="title"
                id="title"
                type="text"
              />
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
            <Textarea
              {...register("description")}
              placeholder="Description..."
            />
          </FormControl>
          <Button color={"#fff"} bg={"blue.300"} type="submit" mt={5}>
            Add product
          </Button>
        </form>
      </Box>
      <ModalViewProduct product={product} isOpen={isOpen} />
    </>
  );
};
export default CFormProduct;
