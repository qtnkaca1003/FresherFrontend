import { Container, Center } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Container maxW={"container.xl"}>
        <Center fontWeight={'bold'}>
          © 2022 Copyright:
          <a href="#/">WebBanHang</a>
        </Center>
      </Container>
    </>
  );
};
export default Footer;
