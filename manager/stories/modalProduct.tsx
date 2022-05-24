import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IProduct } from "../types/interface";
import CFormViewroduct from "../components/form/FromViewProduct";
import CFormViewUser from "../components/form/FromViewUser";
interface IProspUser {
  product: IProduct | undefined;
  isOpen: boolean;
}
const ModalViewProduct = (props: IProspUser) => {
  const { onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CFormViewroduct product={props.product} />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalViewProduct;
