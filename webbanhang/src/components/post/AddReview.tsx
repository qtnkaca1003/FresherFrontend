import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import IProduct from "../../models/IProduct";
import { addProduct } from "../../redux/reducer/PostReducer";

const AddReview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const listProduct= useAppSelector((state)=> state.products?.productList)
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    title: "",
    productName: "",
    product: "",
    category: "",
    content: "",
  });
  /* useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(addProduct(res.data))
      //setProducts(res.data);
    });
  },[dispatch]); */
  //console.log(listProduct);
  
  return (
    <>
      <Box w={"3xl"}>
        <Button onClick={onOpen}>Add review</Button>
        <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add review product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <FormLabel htmlFor="first-name">Title</FormLabel>
                <Input id="first-name" placeholder="First name" />
                <FormLabel htmlFor="country">Product</FormLabel>
                <Select id="country" placeholder="Select product">
                   {/*  {listProduct?.map((item:any)=>{
                        return(
                            <option>{item.title}</option>
                        )
                    })} */}
                </Select>
              </FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
  //const post = useAppSelector((state) => state.post.postList.find((book) => book.id === id));
};
export default AddReview;
