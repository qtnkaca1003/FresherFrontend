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
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

import React, {  useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import IProduct from "../../models/IProduct";
import { addNewPost } from "../../redux/reducer/PostReducer";


const AddReview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const listProduct = useAppSelector((state) => state.listProduct.productList);
  const allProduct = Object.assign([], ...listProduct);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    id: 0,
    title: "",
    content: "",
    productName: "",
    product: "",
    category: "",

  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm({
      ...form,
      [name]: value,

    });
  };
  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Fruit Selected!!", e.currentTarget.value);
    const { name, value } = e.currentTarget;
    const product = allProduct.find((p: any) => p.id === parseInt(value));
    setForm({
      ...form,
      [name]: value,
      category: product ? product?.category : "",
      productName: product ? product?.title : "",
      product: product ? product?.id : ""
    });
  };
  const handlrChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setForm({
      ...form,
      [name]: value,
    });
  };
 
  const handleSubmit =()=>{
    dispatch(addNewPost(form))
  }
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
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  onChange={handleChange}
                  name="title"
                  id="title"
                  placeholder="Title"
                  value={form.title}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="product">Product</FormLabel>
                <Select
                  onChange={handleChangeSelect}
                  id="product"
                  placeholder="Select product"
                >
                  {allProduct?.map((item: IProduct) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.title}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl isReadOnly>
                <FormLabel htmlFor="category">Category</FormLabel>
                <Input
                  name="category"
                  onChange={handleChange}
                  value={form?.category ?? ""}
                  id="category"
                  placeholder="Category"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="content">Content</FormLabel>
                <Textarea
                  onChange={handlrChangeText}
                  name="content"
                  defaultValue={form.content}
                  placeholder="Đánh giá"
                ></Textarea>
              </FormControl>
              <Button mt={4}  onClick={handleSubmit} colorScheme="teal" type="submit">
                Submit
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
export default AddReview;
