import { Box, Container, Image, Text } from "@chakra-ui/react";
const StaticFile = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Box mb={5} borderWidth="1px" borderRadius="lg">
          <Box p="5">
            <Text color={"pink.400"} fontSize={"4xl"} fontWeight={"bold"}>
              Static File Serving
            </Text>
            <Text mt={5}>
              Next.js can serve static files, like images, under a folder called
              public in the root directory. Files inside public can then be
              referenced by your code starting from the base URL (/).
            </Text>
            <Text mt={5}>Example:
            </Text>
            <Image mt={10} src="/vercel.svg" alt="logo-vercel" />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default StaticFile;
