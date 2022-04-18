import React, { useContext } from "react";
import { Container, Flex, Center } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../store/CartProvider";

//import { NavLink } from 'react-router-dom'

const Header = () => {
  const { state, dispatch } = useContext(CartContext);
  const { products } = state;
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
          </Center>
          <Center w="100%" h="70px">
              About
          </Center>
          <Center w="100%" h="70px">
              Contact
          </Center>
          <Center w="100%" h="70px">
              <NavLink id="RouterNavLink" to="/cart">
                CART({products?.length})
              </NavLink>
          </Center>
          <Center w="100%" h="70px">
            <NavLink to="/post" >
              Post
            </NavLink>
              
          </Center>
        </Flex>
      </Container>
    </>
  );
};
export default Header;
