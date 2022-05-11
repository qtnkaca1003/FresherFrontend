import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
const CssInJs = () => {
  
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box mb={5} borderWidth="1px" borderRadius="lg">
          <Box p="5">
            <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
              CSS-in-JS
            </Text>
            <Text mb={5}>
              It is possible to use any existing CSS-in-JS solution. The
              simplest one is inline styles:
            </Text>
           {/*  <Image src="/image/css-inline.jpg" alt="..." /> */}
             <Image
              src="/image/css-inline.jpg"
              width={"800px"}
              height={"300px"}
              layout={"responsive"}
              alt="css-inline"
            />
            <Text mb={5}>
              We bundle styled-jsx to provide support for isolated scoped CSS.
              The aim is to support shadow CSS similar to Web Components, which
              unfortunately do not support server-rendering and are JS-only.
            </Text>
            <Text mb={5}>
              See the above examples for other popular CSS-in-JS solutions (like
              Styled Components).
            </Text>
            <Text mb={5}>A component using styled-jsx looks like this:</Text>
           {/*  <Image src="/image/style-jsx.jpg" alt="..." /> */}
             <Image
              src="/image/style-jsx.jpg"
              width={"800px"}
              height={"800px"}
              layout={"responsive"}
              alt="style-jsx"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default CssInJs;
