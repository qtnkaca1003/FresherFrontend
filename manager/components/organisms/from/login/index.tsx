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
interface IAccount{
    username:string,
    password:string
}
//import ModalViewProduct from "../../molecules/modal/modalProduct";
const CFormLogin = () => {
  const { register, handleSubmit } = useForm<IAccount>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<IAccount>();
 /*  const categorys = useAppSelector((state) => state.product.category);
  const arrCategorys = Object.assign([], ...categorys); */

  const onSubmit: SubmitHandler<IAccount> = (data) => {
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
                Username
              </FormLabel>
              <Input
                {...register("username")}
                name="username"
                id="username"
                type="text"
              />
            </FormControl>
          </Box>
          <FormControl mt={3} pr={5}>
            <FormLabel fontWeight={"normal"} htmlFor="password">
              Password
            </FormLabel>
            <Input {...register("password")} name="password" id="password" type="password" />
          </FormControl>

          <Button color={"#fff"} bg={"blue.300"} type="submit" mt={5}>
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};
export default CFormLogin;
