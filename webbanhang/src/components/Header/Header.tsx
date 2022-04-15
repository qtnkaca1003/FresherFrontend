import React from "react";
import { Container, Flex, Center } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

//import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Container
        d={"flex"}
        justifyContent={"space-between"}
        maxW={"container.xl"}
        maxH="70px"
      >
        <Flex w="30%">
          <Center w="100%" h="70px">
            
              <NavLink hrefLang="#" to="/">
                {" "}
                WEB BÁN HÀNG
              </NavLink>
            
          </Center>
        </Flex>
        <Flex
          w={"70%"}
          d={"flex"}
          justifyContent={"space-evenly"}
          color="black"
        >
          <Center w="100%" h="70px">
          
              <NavLink id="RouterNavLink" to="/">
                HOME
              </NavLink>
            
          </Center>
          <Center w="100%" h="70px">
            
              Products
           
          </Center>
          <Center w="100%" h="70px">
          
              About
          
          </Center>
          <Center w="100%" h="70px">
           
              Contact
            
          </Center>
          <Center w="100%" h="70px">
          
              <NavLink id="RouterNavLink" to="/cart">
                CART
              </NavLink>
           
          </Center>
        </Flex>
      </Container>
    </>
  );
};
export default Header;
