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
    bgColor?:string
    color?:string
    onClickBtn?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
  const ModalDel = (modalDelprops: IModel) => {
    const { isOpen, onClose ,onOpen} = useDisclosure();
   
    return (
      <>
        <Button bgColor={modalDelprops.bgColor} color={modalDelprops.color} ml={3} onClick={onOpen}>Delete</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalDelprops.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{`Do you want to delete ${modalDelprops.name} ?`}</ModalBody>
  
            <ModalFooter>
              <Button
                value={modalDelprops.id}
                onClick={modalDelprops.onClickBtn}
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
  