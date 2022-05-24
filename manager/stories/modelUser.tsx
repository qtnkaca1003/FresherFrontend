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
import CFormViewUser from "../components/form/FromViewUser";
import { IUser } from "../types/interface";

interface IProspUser {
  user: IUser | undefined;
  isOpen: boolean;
}
const ModalView = (props: IProspUser) => {
  const { onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CFormViewUser user={props.user} />
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
export default ModalView;
