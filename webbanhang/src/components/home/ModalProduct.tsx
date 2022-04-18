import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import IProduct from "../../models/IProduct";

interface IProps {
  item?: IProduct;
}

const ModalProduct = (props: IProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { dispatch } = useContext(CartContext);
  //const item:IIem = props.item;
  //console.log(props);
  return (
    <>
      <Box mb={"5"}>
        <Button mr={"5"} onClick={onOpen}>
          Details
        </Button>
      </Box>
      <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader textAlign={"center"}>Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
              <GridItem colSpan={2}>
                <Box maxW="sm" overflow="hidden" textAlign={"center"}>
                  <Image
                    boxSize="250px"
                    src={props.item?.image}
                    alt={props.item?.image}
                    cursor={"pointer"}
                  />
                </Box>
              </GridItem>
              <GridItem colStart={3} colEnd={8}>
                <Text fontWeight={"bold"} fontSize="3xl">
                  {props.item?.title}
                </Text>
                <Text fontSize="1xl">{props.item?.description}</Text>
                <Text fontWeight={"bold"} mt="3" fontSize="2xl">
                  Price: {props.item?.price}${" "}
                  <Button
                    onClick={function () {
                      dispatch({ type: "ADD_CART", payload: props.item });
                    }}
                    ml={"10"}
                  >
                    Add to cart
                  </Button>
                </Text>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalProduct;
