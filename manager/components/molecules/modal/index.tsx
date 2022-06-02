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
interface IModel {
  title: string;
  id: string | number;
  name?: string;
  onClickBtn?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ModalDel = (props: IModel) => {
  const { isOpen, onClose ,onOpen} = useDisclosure();
 
  return (
    <>
      <Button colorScheme={"red"} ml={3} onClick={onOpen}>Delete</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{`Do you want to delete ${props.name} ?`}</ModalBody>

          <ModalFooter>
            <Button
              value={props.id}
              onClick={props.onClickBtn}
              onClickCapture={onClose}
              colorScheme="red"
              mr={3}
            >
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalDel;
