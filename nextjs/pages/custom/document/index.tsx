import {
  Box,
  Container,
  Text,
  Image
} from "@chakra-ui/react";
//import Image from "next/image";

const CustomDocument = () => {
  return (
    <Container maxW={"container.lg"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        mb={5}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Box p="5" w={"container.md"}>
          <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
            Custom Document
          </Text>
          <Text mb={5}>
            A custom Document can update the html and body tags used to render a
            Page. This file is only rendered on the server, so event handlers
            like onClick cannot be used in _document. To override the default
            Document, create the file pages/_document.js as shown below:
          </Text>
          <Image mb={5} src="/image/customDocument.JPG" alt="customDocument   " />
        </Box>
      </Box>
    </Container>
  );
};
export default CustomDocument;
