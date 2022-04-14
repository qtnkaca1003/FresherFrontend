import React from "react";
import { Link, Container, Flex, Center } from "@chakra-ui/react";

//import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Container
        d={"flex"}
        justifyContent={'space-between'}
        maxW={'container.xl'}
        maxH="70px"
      >
        <Flex w="30%">
          <Center w="100%" h="70px">
            <Link
              className="chakra-button css-4l0vht"
              bg="whiteAlpha.400"
              fontWeight={'bold'}
            >
              WEB BÁN HÀNG
            </Link>
          </Center>
        </Flex>
        <Flex
          w={'70%'}
          d={'flex'}
          justifyContent={'space-evenly'}
          color="black"
        >
          <Center w="100%" h="70px">
            <Link
              className="chakra-button css-4l0vht"
              bg="whiteAlpha.400"
              fontWeight={'bold'}
            >
              Home
            </Link>
          </Center>
          <Center w="100%" h="70px">
            <Link
              className="chakra-button css-4l0vht"
              bg="whiteAlpha.400"
              fontWeight={'bold'}
            >
              Products
            </Link>
          </Center>
          <Center w="100%" h="70px">
            <Link
              className="chakra-button css-4l0vht"
              bg="whiteAlpha.400"
              fontWeight={'bold'}
            >
              About
            </Link>
          </Center>
          <Center w="100%" h="70px">
            <Link
              className="chakra-button css-4l0vht"
              bg="whiteAlpha.400"
              fontWeight={'bold'}
            >
              Contact
            </Link>
          </Center>
        </Flex>
      </Container>
    </>
  );
};
export default Header;
