import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import apiProduct from "../../../../api/Product";
import { useAppSelector } from "../../../../hook";
import { IProduct } from "../../../../types/interface";

//import ModalViewProduct from "../../molecules/modal/modalProduct";
const CFormProduct = () => {
  const { register, handleSubmit } = useForm<IProduct>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct>();
  const categorys = useAppSelector((state) => state.product.category);
  const arrCategorys = Object.assign([], ...categorys);

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    console.log(data);

    /*  apiProduct.addProduct(data).then((res) => {
      setProduct(res.data);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }); */
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
              <Select
                //name="category"
                id="category"
                {...register("category")}
                //placeholder="Select Category"
              >
                {arrCategorys.map((opt: string, index:any) => {
                  return (
                    <option key={index} value={opt}>
                      {opt}
                    </option>
                  );
                })}
              </Select>
            </FormLabel>
            {/*  <Input
              {...register("category")}
              name="category"
              id="category"
              type="text"
            /> */}
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
    </>
  );
};
export default CFormProduct;
